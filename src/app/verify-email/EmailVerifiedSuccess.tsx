"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function EmailVerifiedSuccess() {
  const router = useRouter();

  return (
    <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-teal-500">
          Email Verified Successfully
        </h1>
        <p className="text-sm text-gray-400">
          Explore all the features our applicaiton has to offer
        </p>
      </div>
      <div className="text-center">
        <Button
          onClick={() => router.push("/auth")}
          className="cursor-pointer bg-teal-600 text-gray-200 hover:bg-teal-700 hover:text-gray-200"
        >
          Go to HomePage
        </Button>
      </div>
    </div>
  );
}
