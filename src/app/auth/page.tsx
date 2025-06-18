import React from "react";
import AuthComponent from "./AuthComponent";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  console.log("Search params in Auth Page---", error);

  return (
    <div>
      <AuthComponent AuthError={error ? error : ""} />
    </div>
  );
}
