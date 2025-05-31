"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles as WandSparkles, Play } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Make sure the element starts as visible instead of depending on animation
    if (videoRef.current) {
      videoRef.current.style.opacity = "1";
      videoRef.current.style.transform = "translateY(0) translateX(0)";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Instead of adding a class, directly manipulate the styles
            if (entry.target instanceof HTMLElement) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0) translateX(0)";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const videoRefCurrent = videoRef.current;

    if (videoRefCurrent) {
      observer.observe(videoRefCurrent);
    }

    return () => {
      if (videoRefCurrent) {
        observer.unobserve(videoRefCurrent);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 space-y-6">
            <div className="flex items-center gap-2 text-teal-400 font-medium">
              <WandSparkles size={18} />
              <span>AI-Powered Video Creation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Transform Text & Images</span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-cyan-400 bg-clip-text text-transparent">
                Into Amazing Videos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Create stunning, professional-quality videos in minutes by
              combining your text, images, and AI-generated audio. No technical
              skills required.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                className="bg-teal-700 text-gray-100 hover:bg-teal-800 hover:text-white cursor-pointer"
                onClick={() => router.push("/ai/text-to-video")}
              >
                Start Creating
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 cursor-pointer"
              >
                <Play size={18} className="fill-teal-400 " />
                Watch Demo
              </Button>
            </div>
          </div>

          <div
            ref={videoRef}
            className="lg:w-1/2 transition-all duration-1000"
            style={{ opacity: 0, transform: "translateY(8px)" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500/30 to-cyan-500/30 blur-md"></div>
              <div className="relative bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl overflow-hidden p-1">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                  <Image
                    src="https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg"
                    alt="Video creation preview"
                    className="w-full h-full object-cover opacity-90"
                    height={450}
                    width={800}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-200">
                      <Play size={28} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full p-2 animate-pulse">
                  <WandSparkles size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
