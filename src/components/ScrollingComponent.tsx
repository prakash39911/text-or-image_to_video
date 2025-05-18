import React from "react";
import { cn } from "@/lib/utils";
import "./scrollComponent.css";

interface TextTickerProps {
  text: string;
  width?: string | number;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const ScrollingComponent = ({
  text,
  speed = "normal",
  className,
}: TextTickerProps) => {
  // Calculate animation speed based on prop
  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "15s";
      case "fast":
        return "5s";
      default:
        return "10s";
    }
  };

  return (
    <div
      className={cn(
        "text-ticker-container relative overflow-hidden",
        className
      )}
    >
      <div
        className="text-ticker-content whitespace-nowrap text-teal-400 text-2xl"
        style={{
          animationDuration: getAnimationDuration(),
        }}
      >
        {text} &nbsp;<span className="text-pink-400">•</span>&nbsp; {text}{" "}
        &nbsp;<span className="text-pink-400">•</span>&nbsp; {text} &nbsp;
        <span className="text-pink-400">•</span>&nbsp; {text}
      </div>

      {/* Left shadow overlay */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-background to-transparent z-10"></div>

      {/* Right shadow overlay */}
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-background to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingComponent;
