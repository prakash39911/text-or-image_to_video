"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function GetFreshTokenData() {
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
      setMessage("Redirecting you...");

      const timer = setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 2000);

      return () => clearTimeout(timer);
    }

    if (status === "unauthenticated") {
      router.push("/auth");
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="border rounded-3xl p-8 border-gray-700 max-w-md w-full space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-10">
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h1 className="text-2xl font-bold tracking-tight text-teal-500">
            {message}
          </h1>
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );
}
