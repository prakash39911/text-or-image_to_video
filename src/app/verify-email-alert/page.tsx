import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-teal-500">
            Verify Email{" "}
          </h1>
          <p className="text-sm text-gray-400">
            Verify Your Email to get started with our platform
          </p>
        </div>
      </div>
    </div>
  );
}
