"use client";

import React, { useEffect, useRef } from "react";
import { Sparkles as WandSparkles, Play } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import VideoCarousel from "../VideoCarousel";

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
    <section className="sm:pt-30 lg:pt-5 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2 text-teal-400 font-medium">
              <WandSparkles size={18} />
              <span>AI-Powered Video Creation</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Transform Text</span>
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-cyan-400 bg-clip-text text-transparent">
                Into Amazing Videos
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Create stunning, professional-quality <strong>Videos</strong> with{" "}
              <strong>Music</strong> in minutes by just entering Text. No
              technical skills required.
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
            </div>
          </div>

          <div className="container mx-auto px-4">
            <VideoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
