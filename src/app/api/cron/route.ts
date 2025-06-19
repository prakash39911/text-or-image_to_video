import { sendMail } from "@/app/actions/mailAction";
import { PromotionalCreditEmail } from "@/components/emailTemplates";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (
      req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    console.log("Cron Job triggered...");

    await sendMail(
      "TextToVideo@resend.dev",
      "prakash39911@gmail.com",
      "Get Huge Discount Only for Today",
      PromotionalCreditEmail({ purchaseUrl: `${process.env.BASE_URL}` })
    );

    return NextResponse.json(
      { message: "Promotional Mail Sent.." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processign CRON job");
  }
}
