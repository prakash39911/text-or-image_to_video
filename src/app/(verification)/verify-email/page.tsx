import React from "react";
import { redirect } from "next/navigation";
import { verifyEmail } from "@/app/actions/authActions";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  const result = token ? await verifyEmail(token) : null;

  if (!result) {
    redirect("/");
  }

  if (result && result.status === "success") {
    redirect("/email-verify-success");
  }

  if (result && result.status !== "success") {
    return (
      <div className="flex min-h-screen text-red-700 text-xl justify-center items-center">
        Something went wrong
      </div>
    );
  }
}
