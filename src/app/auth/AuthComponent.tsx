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

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <div className="relative">
                {"Video AI".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 50,
                      rotateX: 90,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 360,
                      transition: { duration: 0.6 },
                    }}
                    className={`
                  inline-block font-bold text-2xl md:text-6xl
                  cursor-pointer transform-gpu
                  ${
                    index === 0 || index === 6
                      ? "bg-gradient-to-r from-amber-400 to-purple-500 bg-clip-text text-transparent"
                      : "text-white"
                  }
                  drop-shadow-2xl
                  ${letter === " " ? "w-4" : ""}
                `}
                    style={{
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                      textShadow:
                        index === 0 || index === 6
                          ? "0 0 30px rgba(236, 72, 153, 0.5)"
                          : "0 0 20px rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="text-slate-300 text-lg md:text-xl font-light tracking-wide"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 2.5, duration: 2, ease: "easeOut" }}
                className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-purple-400"
              >
                The Future of Video Generation
              </motion.span>
            </motion.div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full opacity-70"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
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
