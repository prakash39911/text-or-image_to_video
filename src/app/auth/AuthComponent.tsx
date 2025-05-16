"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";

export default function AuthComponent() {
  const [isSignup, setIsSignup] = useState(false);

  const imagePublicID = "8751584_qratne";
  const Logo = "Designer_1_togiud";

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 h-screen">
      {/* Image section */}
      <div className="md:col-span-2 h-[120px] md:h-screen">
        <div className="w-full md:h-full relative bg-slate-800 ">
          <CldImage
            alt="image"
            src={imagePublicID}
            width={2000}
            height={3000}
            className="w-full object-cover h-[250px] md:h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
          />

          <div className="absolute inset-0 flex justify-center items-center font-mono text-amber-100 text-3xl md:text-4xl tracking-tight lg:text-6xl font-bold">
            <CldImage
              alt="image"
              src={Logo}
              width={1024}
              height={1024}
              className="w-35 h-35 rounded-4xl"
            />
          </div>
        </div>
      </div>

      {/* Auth form section */}
      <div className="md:col-span-3 flex items-center justify-center p-4 bg-slate-900">
        {!isSignup ? (
          <SignIn setIsSignup={setIsSignup} />
        ) : (
          <SignUp setIsSignup={setIsSignup} />
        )}
      </div>
    </div>
  );
}
