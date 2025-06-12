"use server";

import { PasswordResetEmail } from "@/components/emailTemplates";
import { prisma } from "@/lib/PrismaClient";
import { Resend } from "resend";
import { generateToken, getTokenByEmail } from "./tokenActions";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(
  fromEmail: string,
  toEmail: string,
  subject: string,
  emailTemplate: any,
  retries: number = 3
) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        react: emailTemplate,
      });

      if (error) {
        console.log("Unable to send mail");
        throw error;
      }

      return { status: "success", message: "Email Sent Successfully" };
    } catch (error) {
      console.error(`Send mail attempt ${attempt + 1} failed:`, error);

      if (attempt === retries - 1) {
        throw error;
      }

      const delay = Math.pow(2, attempt) * 1000;

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

export async function SendPasswordResetLink(email: string) {
  try {
    const existingUser = await prisma.userData.findFirst({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return { status: "error", message: "User does not have account" };
    }

    const existingToken = await getTokenByEmail(email, "PASSWORD_RESET");

    if (existingToken) {
      await prisma.token.delete({
        where: {
          id: existingToken.id,
        },
      });
    }

    const isTokenGenerated = await generateToken(email, "PASSWORD_RESET");

    const isSent = await sendMail(
      "TextToVideo@resend.dev",
      email,
      "Reset Passowrd",
      PasswordResetEmail({
        firstName: existingUser.name,
        resetUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${isTokenGenerated.token}`,
      })
    );

    return {
      status: "success",
      message: "Password reset email is sent successfully",
    };
  } catch (error) {
    console.log("Unable to send password reset link");
    throw error;
  }
}
