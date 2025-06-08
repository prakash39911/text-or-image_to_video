import React from "react";
import RefreshData from "./RefreshData";

export default async function page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-teal-500">
            Verify Your Email
          </h1>
          <p className="text-sm text-gray-400">
            Refresh to Check if Email if Verified
          </p>
          <RefreshData />
        </div>
      </div>
    </div>
  );
}
