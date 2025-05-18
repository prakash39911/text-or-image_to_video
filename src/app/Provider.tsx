import React from "react";
import { auth } from "./auth";
import { SessionProvider } from "next-auth/react";
import FinalProvider from "./FinalProvider";

export default async function Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div>
      <SessionProvider session={session}>
        <FinalProvider>{children}</FinalProvider>
      </SessionProvider>
    </div>
  );
}
