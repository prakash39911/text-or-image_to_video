import React from "react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export default function LoadingSpinner({
  size = 32,
  className,
}: LoadingSpinnerProps) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Loader
        className="animate-spin text-red-600"
        size={size}
        strokeWidth={2.5}
      />
    </div>
  );
}
