"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { useNotificationChannel } from "@/hooks/useNotificationChannel";
import { ThemeProvider } from "next-themes";

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
