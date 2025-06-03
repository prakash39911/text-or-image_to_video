import React, { useState, useEffect } from "react";

const LoadingState: React.FC = () => {
  const [currentText, setCurrentText] = useState("Generating Video");
  const [fadeState, setFadeState] = useState("in"); // "in" or "out"

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("out");

      setTimeout(() => {
        setCurrentText((prev) =>
          prev === "Generating Video" ? "Please wait" : "Generating Video"
        );
        setFadeState("in");
      }, 500); // Wait for fade out to complete
    }, 3000); // Switch text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full w-full bg-gray-800">
        <div className="relative">
          <div
            className={`
          text-teal-400 font-medium text-lg
          transition-opacity duration-500
          ${fadeState === "in" ? "opacity-100" : "opacity-0"}
        `}
          >
            {currentText}
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <div
            className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
