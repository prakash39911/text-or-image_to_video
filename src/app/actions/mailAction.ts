"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(
  fromEmail: string,
  toEmail: string,
  subject: string,
  emailTemplate: any
) {
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
    console.error("Unable to send mail", error);
    throw error;
  }
}
