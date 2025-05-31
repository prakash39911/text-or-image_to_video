import React from "react";
import { auth } from "./auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div>
      <SessionProvider session={session}>
        <main>{children}</main>
        <Toaster />
      </SessionProvider>
    </div>
  );
}
