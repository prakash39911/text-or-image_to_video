import BuyNowSection from "@/components/homepage/BuyNowSection";
import Header from "@/components/homepage/Header";
import React from "react";
import { getUserCredits } from "../actions/authActions";
import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  const credits = await getUserCredits();

  return (
    <div>
      <Header
        isLoggedIn={session?.user?.email ? true : false}
        credit={credits ?? 0}
      />
      <BuyNowSection session={session} />
    </div>
  );
}
