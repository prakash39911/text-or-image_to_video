"use server";

import { prisma } from "@/lib/PrismaClient";
import { razorPayInstance } from "@/lib/razorpay";
import { auth } from "../auth";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export async function CreateOrder(packageId: string) {
  const session = await auth();

  try {
    const packageDetails = await prisma.packageDetails.findFirst({
      where: {
        key: packageId,
      },
    });

    if (!packageDetails) {
      console.log("Wrong package ID");
      return { status: false, data: null };
    }

    const options = {
      amount: packageDetails.sellingPrice,
      currency: "INR",
      receipt: `Receipt no-${Date.now()}`,
      notes: {
        email: `${session?.user.email}`,
        packageId: `${packageDetails.id}`,
        credit: `${packageDetails.credit}`,
      },
    };

    const response = await razorPayInstance.orders.create(options);

    return { status: true, data: response };
  } catch (error) {
    console.log("Unable to create order");
    throw error;
  }
}

export async function VerifyPaymentSignature(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
) {
  const secret = process.env.RZPAY_SECRET_KEY;

  if (!secret) {
    console.error("Secret is not loaded properly");
    return;
  }
  try {
    const isValidSignature = validatePaymentVerification(
      { order_id: razorpay_order_id, payment_id: razorpay_payment_id },
      razorpay_signature,
      secret
    );

    if (!isValidSignature) {
      console.log("InValid RazorPay Signature");
      return { status: false, message: "Payment is not verified" };
    }

    return { status: true, message: "Payment verified successfully" };
  } catch (error) {
    console.log("Unable to Verify Payment Signature", error);
    return { status: false, message: "Payment is not verified" };
  }
}

export async function SavePaymentDataInDB(paymentData: any) {
  try {
    const user = await prisma.userData.findUnique({
      where: {
        email: paymentData.notes.email,
      },
    });

    if (!user) {
      console.log("Unable to find user in Db");
      return;
    }

    const updatePaymentInfo = await prisma.purchaseDetails.create({
      data: {
        order_id: paymentData.order_id,
        amount: paymentData.amount,
        currency: paymentData.currency,
        payment_status: "CAPTURED",
        email: paymentData?.notes?.email,
        contact: paymentData.contact || null, // Handle potential null value
        createdAt: new Date(paymentData.created_at * 1000), // Convert Unix timestamp to Date
        creditPurchased: parseInt(paymentData?.notes?.credit),
        userId: user.id,
        packageDetailsId: paymentData?.notes?.packageId,
        invoice_name: `invoice_${Date.now().toString().slice(0, 4)}${paymentData.order_id.slice(0, 4)}`,
      },
    });

    const creditsForUser = user.credits
      ? user.credits + parseInt(paymentData?.notes?.credit)
      : parseInt(paymentData?.notes?.credit);

    const updatedUserData = await prisma.userData.update({
      where: {
        id: user.id,
      },
      data: {
        credits: creditsForUser,
      },
    });

    return {
      user: updatedUserData,
      message: "Data Saved Successfully",
      savedData: updatePaymentInfo,
    };
  } catch (error) {
    console.log("Unable to save data in the Db", error);
    throw error;
  }
}
