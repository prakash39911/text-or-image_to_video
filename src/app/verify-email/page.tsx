import React from "react";
import { verifyEmail } from "../actions/authActions";
import EmailVerifiedSuccess from "./EmailVerifiedSuccess";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  const result = token ? await verifyEmail(token) : null;

  return (
    <div>
      {!result && (
        <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
      {result && result.status === "success" && (
        <div className="flex min-h-screen justify-center items-center">
          <EmailVerifiedSuccess />
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
