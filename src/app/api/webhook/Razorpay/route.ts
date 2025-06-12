import { sendMail } from "@/app/actions/mailAction";
import { SavePaymentDataInDB } from "@/app/actions/paymentActions";
import { CreditPurchaseEmail } from "@/components/emailTemplates";
import { pusherServer } from "@/lib/pusher";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";

export async function POST(request: Request) {
  const secretWbhook = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!secretWbhook) {
    console.error("RzPay Secret not loaded");
    return Response.json(
      { status: false, message: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  try {
    const headers = request.headers;
    const incomingSignature = headers.get("x-razorpay-signature");

    if (!incomingSignature) {
      return Response.json(
        { status: false, message: "No signature received" },
        { status: 400 }
      );
    }

    // Get the raw body as text first
    const inComingBody = await request.text();

    const isValidSignature = validateWebhookSignature(
      inComingBody, // Use raw body
      incomingSignature,
      secretWbhook
    );

    if (!isValidSignature) {
      return Response.json(
        { status: false, message: "Invalid signature" },
        { status: 401 }
      );
    }

    // Parse the body after signature validation
    const parsedBody = JSON.parse(inComingBody);

    const event = parsedBody?.event;
    const paymentData = parsedBody?.payload?.payment?.entity;

    if (event !== "payment.captured") {
      return Response.json(
        { status: false, message: "Payment Unsuccessful" },
        { status: 400 }
      );
    }

    // Add safety checks for nested properties
    if (!paymentData?.notes?.email) {
      console.log("No email found in payment data");
      return Response.json(
        { status: false, message: "Invalid payment data - missing email" },
        { status: 400 }
      );
    }

    const isDataSaved = await SavePaymentDataInDB(paymentData);

    if (!isDataSaved) {
      console.error("Unable to save data in DB");
      return Response.json(
        { message: "Something went wrong while saving the data" },
        { status: 500 }
      );
    }

    // Add error handling for Pusher
    try {
      await pusherServer.trigger(
        `private-${isDataSaved.user.id}`,
        "payment:successfull",
        {
          amount: isDataSaved.savedData.amount,
        }
      );
    } catch (pusherError) {
      console.error("Pusher error:", pusherError);
      // Don't fail the webhook for Pusher errors
    }

    try {
      await sendMail(
        "TextToVideo@resend.dev",
        isDataSaved.user.email || "email",
        "Payment Done",
        CreditPurchaseEmail({
          firstName: isDataSaved.user.name || "Name",
          credits: isDataSaved.savedData.creditPurchased || 12,
          amountPaid: isDataSaved.savedData.amount || 1300,
        })
      );
    } catch (sendEmailError) {
      console.error("Send Email Error", sendEmailError);
    }

    return Response.json({
      status: true,
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Error in payment webhook handler:", error);

    return Response.json(
      { status: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
