"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { toast } from "sonner";

export default function VerifySuccessPage() {
  const { data: session, status, update } = useSession();
  const [isUpdateTriggered, setIsUpdateTriggered] = useState(false);
  const [message, setMessage] = useState(
    "Finalizing your verification, please wait..."
  );

  const router = useRouter();

  // Effect 1: Trigger the session update ONCE.
  useEffect(() => {
    const updateTokenData = async () => {
      if (
        status === "authenticated" &&
        !session?.user.emailVerified &&
        !isUpdateTriggered
      ) {
        setIsUpdateTriggered(true);
        await update({ trigger: "emailVerification" });
      }
    };
    updateTokenData();
  }, [status, session, isUpdateTriggered, update]);

  useEffect(() => {
    if (status === "authenticated" && session?.user.emailVerified) {
      setMessage("Email verified successfully! Redirecting you...");

      const timer = setTimeout(() => {
        router.push("/");
        router.refresh();
        toast("Email verified Successfully");
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (status === "unauthenticated") {
      router.push("/auth");
      toast(
        "Email verified Successfully.. Please Login To Continue Using Our services"
      );
    }
  }, [status, session, router]);

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full border rounded-3xl p-8 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-teal-500">
              {message}
            </h1>
          </div>
          <div>
            <LoadingSpinner />
          </div>
        </div>
      </div>
    </div>
  );
}
