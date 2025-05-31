"use client";

import React from "react";
import { Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CTASection = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const features = [
    "Create Short videos",
    "Custom templates",
    "Generate in HD quality",
    "No watermarks",
    "Priority support",
  ];

  const router = useRouter();

  const { data, status } = useSession();

  const loggedOut = status === "loading" || status !== "authenticated";
  const isUserLoggedIn = status === "authenticated";

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto">
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 overflow-hidden">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 blur-xl opacity-20 animate-pulse"></div>

          <div className="relative bg-slate-800/90 backdrop-blur rounded-xl p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-2/3 h-1/2 bg-teal-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
              <div className="lg:w-3/5">
                <div className="flex items-center gap-2 text-teal-400 font-medium mb-4">
                  <Zap size={18} className="text-teal-400" />
                  <span>Limited Time Offer</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Creating Amazing Videos
                  <span className="block mt-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Without the Complexity
                  </span>
                </h2>

                <p className="text-lg text-gray-300 mb-8">
                  Join thousands of creators, marketers, and educators who are
                  transforming their content with AI-powered video creation.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {!isLoggedIn && (
                <div className="lg:w-2/5 flex justify-center">
                  <div className="flex gap-4 items-center">
                    <span className="text-pink-400 animate-bounce transition-all duration-500">
                      <ArrowRight size={40} />
                    </span>
                    <Button
                      variant="outline"
                      className="py-12 px-14 cursor-pointer"
                      onClick={() => router.push("/auth")}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-4xl">Sign Up</span>{" "}
                      </div>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
