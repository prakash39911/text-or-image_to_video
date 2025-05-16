import React from "react";
import { Toaster } from "@/components/ui/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <Toaster />
    </div>
  );
}
