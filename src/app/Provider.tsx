"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { useNotificationChannel } from "@/hooks/useNotificationChannel";

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  useNotificationChannel(session?.user?.id);

  return (
    <div>
      <SessionProvider session={session}>
        <main>{children}</main>
        <Toaster />
      </SessionProvider>
    </div>
  );
}
