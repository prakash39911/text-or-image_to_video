"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function RefreshData() {
  const { update, data: session } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.user?.emailVerified) {
      router.push("/");
    }
  }, [session?.user?.emailVerified, router]);

  const handleRefresh = async () => {
    try {
      setIsLoading(true);

      // Pass an object to trigger the "update" event in jwt callback
      const updatedSession = await update({ trigger: "emailVerification" });

      // Small delay to ensure middleware gets the updated token
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Now navigate
      router.push("/");
    } catch (error) {
      console.error("Error updating session:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-10">
      <p className="text-sm text-gray-400">
        Go to HomePage if already verified
      </p>
      <Button
        variant="ghost"
        className="border border-gray-500 text-gray-200 cursor-pointer"
        onClick={handleRefresh}
        disabled={isLoading}
      >
        {isLoading ? "Refreshing..." : "Refresh"}
      </Button>
    </div>
  );
}
