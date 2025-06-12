import Razorpay from "razorpay";

export const razorPayInstance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RZPAY_KEY_ID,
  key_secret: process.env.RZPAY_SECRET_KEY,
});
