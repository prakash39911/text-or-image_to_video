"use client";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";
import { motion } from "framer-motion";

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

          <div className="absolute inset-0 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="font-mono text-white text-4xl md:text-5xl tracking-tight lg:text-6xl font-bold"
            >
              {"Video AI".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: index * 0.2,
                    repeat: Infinity, // Repeat infinitely
                    repeatType: "loop", // Makes the animation go back to start
                    repeatDelay: 1, // Optional delay between repeats
                  }}
                  className={
                    index === 0 || index === 6 // V is at index 0, A is at index 6
                      ? "text-pink-500"
                      : "text-white"
                  }
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* <div className="absolute inset-0 flex justify-center items-center font-mono text-amber-100 text-3xl md:text-4xl tracking-tight lg:text-6xl font-bold">
            <CldImage
              alt="image"
              src={Logo}
              width={1024}
              height={1024}
              className="w-35 h-35 rounded-4xl"
            />
            Video AI
          </div> */}
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
