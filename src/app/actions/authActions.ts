"use server";

import { SignUpFormSchema, SignUpFormSchemaType } from "@/lib/ZodSchema";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/PrismaClient";
import { signOut } from "../auth";
import { generateToken, getTokenByToken } from "./tokenActions";
import { sendMail } from "./mailAction";
import { VerifyEmail } from "@/components/emailTemplates";
import { redirect } from "next/navigation";

type tokenData = {
  status: string;
  message: string;
  data: {
    id: string;
    email: string;
    type: "EMAIL_VERIFICATION" | "PASSWORD_RESET";
    expires: Date;
    token: string;
  };
};

export async function RegisterUser(data: SignUpFormSchemaType) {
  try {
    const validate = SignUpFormSchema.safeParse(data);

    if (!validate.success) {
      throw new Error("Validation failed");
    }

    const { firstName, lastName, email, password } = validate.data;

    const fullName = firstName + " " + lastName;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.userData.create({
      data: {
        name: fullName,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    const tokenData = await generateToken(email, "EMAIL_VERIFICATION");

    await sendMail(
      "TextToVideo@resend.dev",
      email,
      "Verify Your email",
      VerifyEmail({
        firstName: fullName,
        verificationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${tokenData.token}`,
      })
    );

    return { status: true, data: createdUser };
  } catch (error) {
    console.error(error, "Error While creating User");
  }
}

export async function LogoutUser() {
  try {
    await signOut({ redirect: false });

    return { status: true, message: "You are logged out" };
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

export const verifyEmail = async (token: string) => {
  try {
    const existingToken = await prisma.token.findFirst({
      where: {
        token,
      },
    });

    if (!existingToken) {
      return { status: "error", error: "Invalid Token" };
    }

    const hasExpired = new Date() > existingToken.expires;

    if (hasExpired) {
      return { status: "error", error: "Token has expired" };
    }

    const existingUser = await prisma.userData.findFirst({
      where: {
        email: existingToken.email,
      },
    });

    if (!existingUser) {
      return { status: "error", error: "User not found" };
    }

    await prisma.userData.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    await prisma.token.delete({
      where: {
        id: existingToken.id,
      },
    });

    return { status: "success", data: "Success" };
  } catch (error) {
    console.log("Unable to verify email", error);
    throw error;
  }
};

export const ResetUserPassword = async (token: string, password: string) => {
  try {
    const tokenData = (await getTokenByToken(token)) as tokenData;

    const hasExpired = new Date() > tokenData.data?.expires;

    if (hasExpired) {
      return { status: "error", error: "Token has expired" };
    }

    const existingUser = await prisma.userData.findFirst({
      where: {
        email: tokenData.data?.email,
      },
    });

    if (!existingUser) {
      return { status: "error", message: "User Not Found" };
    }

    const hashPass = await bcrypt.hash(password, 10);

    const isSaved = await prisma.userData.update({
      where: {
        id: existingUser.id,
      },
      data: {
        password: hashPass,
      },
    });

    await prisma.token.delete({
      where: {
        id: tokenData.data.id,
      },
    });

    return { status: "success", message: "password reset successfull" };
  } catch (error) {
    console.log("Error while resetting password", error);
    throw error;
  }
};
