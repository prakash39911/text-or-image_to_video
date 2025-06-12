import React from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function loading() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}
