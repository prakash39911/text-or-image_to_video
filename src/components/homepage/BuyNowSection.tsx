"use client";

import { Check, Video, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  CreateOrder,
  VerifyPaymentSignature,
} from "@/app/actions/paymentActions";
import { toast } from "sonner";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface PricingTier {
  id: string;
  name: string;
  credits: number;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: string[];
  description: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Pack",
    credits: 5,
    price: 500,
    originalPrice: 600,
    description: "Perfect for trying out our video generation",
    features: ["5 video generations", "HD quality output", "Email support"],
  },
  {
    id: "professional",
    name: "Professional",
    credits: 10,
    price: 1000,
    originalPrice: 1200,
    popular: true,
    description: "Best value for regular content creators",
    features: ["10 video generations", "HD quality output", "Priority support"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    credits: 20,
    price: 2000,
    originalPrice: 2400,
    description: "For teams and heavy users",
    features: [
      "20 video generations",
      "HD quality output",
      "24/7 priority support",
    ],
  },
];

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function BuyNowSection() {
  const { data: sessionData, status } = useSession();
  const [isLoading, setIsLoading] = useState<{
    loading: boolean;
    key: string | null;
  }>({
    loading: false,
    key: null,
  });
  const router = useRouter();

  const handleBuyNow = async (tierId: string) => {
    setIsLoading({ loading: true, key: tierId });

    try {
      if (!sessionData?.user.email) {
        router.push("/auth");
        toast("Please Login first");
        setIsLoading({ loading: true, key: null });
        return;
      }

      const isRazorpayLoaded = await loadRazorpayScript();

      if (!isRazorpayLoaded) {
        console.log("Razorpay SDK failed to load.");
        return;
      }

      const isOrderCreated = await CreateOrder(tierId);

      console.log("razorpay response--", isOrderCreated);

      if (!isOrderCreated.status || !isOrderCreated.data) {
        toast.error("Order Creation Failed");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RZPAY_KEY_ID,
        amount: isOrderCreated.data?.amount,
        currency: "INR",
        name: "Text-To-video Website",
        description: `Payment for Purchasing package ${tierId}`,
        order_id: isOrderCreated?.data?.id,
        prefill: {
          name: sessionData.user.name || "",
          email: sessionData.user.email || "",
        },

        handler: async function (response: any) {
          // Executes after successfull payment
          try {
            const finalResult = await VerifyPaymentSignature(
              isOrderCreated.data?.id,
              response.razorpay_payment_id,
              response.razorpay_signature
            );

            if (finalResult?.status) {
              toast.success("Payment Received and Verified Successfully");
            } else {
              toast.error("Payment verification failed");
            }
          } catch (verificationError) {
            console.error("Payment verification error:", verificationError);
            toast.error("An error occurred during payment verification");
          }
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("An error occurred while initiating payment");
      setIsLoading({ loading: false, key: null });
    } finally {
      setIsLoading({ loading: false, key: null });
    }
  };

  return (
    <section
      id="pricing"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="h-8 w-8 text-teal-400" />
            <span className="text-teal-400 font-semibold text-lg">
              Video Credits
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
              {" "}
              Video Package
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Generate stunning videos with our AI-powered platform. Each credit
            creates one professional video.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gray-800/70 ${
                tier.popular
                  ? "ring-2 ring-teal-400 shadow-2xl shadow-teal-400/20"
                  : "hover:border-teal-400/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-400 to-cyan-300 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {tier.name}
                </CardTitle>
                <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

                {/* Credits Display */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Zap className="h-6 w-6 text-teal-400" />
                  <span className="text-3xl font-bold text-teal-400">
                    {tier.credits}
                  </span>
                  <span className="text-gray-300">credits</span>
                </div>

                {/* Price Display */}
                <div className="flex items-center justify-center gap-2">
                  {tier.originalPrice && (
                    <span className="text-gray-500 line-through text-lg">
                      ₹{tier.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-white">
                    ₹{tier.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  ₹{Math.round(tier.price / tier.credits)} per video
                </p>
              </CardHeader>

              <CardContent className="pt-4">
                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-teal-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buy Now Button */}
                <Button
                  onClick={() => handleBuyNow(tier.id)}
                  disabled={isLoading.loading && isLoading.key !== tier.id}
                  className={`w-full cursor-pointer py-3 text-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-gradient-to-r from-teal-400 to-cyan-300 hover:from-teal-500 hover:to-cyan-400 text-gray-900 shadow-lg shadow-teal-400/25"
                      : "bg-gray-700 hover:bg-teal-600 text-white border border-gray-600 hover:border-teal-400"
                  }`}
                >
                  {isLoading.loading ? (
                    <div>
                      {isLoading.key === tier.id ? (
                        <div className="flex gap-2">
                          <LoadingSpinner size={20} />
                          <span>Buy Now</span>
                        </div>
                      ) : (
                        "Buy Now"
                      )}
                    </div>
                  ) : (
                    "Buy Now"
                  )}
                </Button>

                {/* Money Back Guarantee */}
                <p className="text-center text-gray-400 text-xs mt-3">
                  30-day money-back guarantee
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Our Video Generator?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Video className="h-8 w-8 text-teal-400 mx-auto" />
                <h4 className="font-semibold text-white">
                  Professional Quality
                </h4>
                <p className="text-gray-300 text-sm">
                  Generate high-quality videos with advanced AI technology
                </p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-teal-400 mx-auto" />
                <h4 className="font-semibold text-white">Lightning Fast</h4>
                <p className="text-gray-300 text-sm">
                  Create videos in minutes, not hours
                </p>
              </div>
              <div className="space-y-2">
                <Star className="h-8 w-8 text-teal-400 mx-auto" />
                <h4 className="font-semibold text-white">Easy to Use</h4>
                <p className="text-gray-300 text-sm">
                  No technical skills required - just upload and generate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
