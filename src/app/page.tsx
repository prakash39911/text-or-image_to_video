import LandingPage from "@/components/homepage/LandingPage";
import React from "react";
import { auth } from "./auth";

async function App() {
  const session = await auth();

  const isLoggedIn = !!session?.user?.email;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <LandingPage isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
