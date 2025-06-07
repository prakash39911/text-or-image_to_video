// app/reset-password/page.tsx
import React from "react";
import ResetPassword from "./ResetPassword";
import { getTokenByToken } from "../actions/tokenActions";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  const result = token ? await getTokenByToken(token) : null;

  return (
    <div>
      {!result && (
        <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
          <LoadingSpinner />
        </div>
      )}

      {result && result?.status === "success" && (
        <div className="flex min-h-screen justify-center items-center">
          <ResetPassword token={token} />
        </div>
      )}

      {result && result.status !== "success" && (
        <div className="flex min-h-screen text-red-700 text-xl justify-center items-center">
          Something went wrong
        </div>
      )}
    </div>
  );
}
