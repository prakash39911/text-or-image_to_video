"use client";

import React, { useEffect, useState } from "react";
import { Coins } from "lucide-react";
import { creditStore } from "@/lib/store/creditStore";

interface CreditComponentProps {
  credits?: number;
  className?: string;
}

const CreditWidget: React.FC<CreditComponentProps> = ({
  credits = 0,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const setCredit = creditStore((state) => state.setCredit);
  const globalCredits = creditStore((state) => state.credits);

  useEffect(() => {
    setCredit(credits);
  }, [setCredit, credits]);

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className="flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm border border-teal-700/50 rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gold Coin Icon */}
        <div className="flex items-center justify-center w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-sm">
          <Coins
            size={14}
            className="text-yellow-900 group-hover:rotate-12 transition-transform duration-300"
          />
        </div>

        {/* Credits Display */}
        <span className="text-teal-300 font-medium text-sm">
          {globalCredits}
        </span>
      </div>

      {/* Enhanced Tooltip Below Icon */}
      <div
        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-gray-900/95 text-teal-300 text-sm font-medium rounded-lg shadow-xl border border-teal-500/30 backdrop-blur-sm transition-all duration-200 ease-in-out pointer-events-none ${
          isHovered
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-1 invisible"
        }`}
      >
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-teal-400">Credits:</span>
            <span className="text-white font-bold">{globalCredits}</span>
          </div>
        </div>

        {/* Arrow pointing up */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900/95"></div>
      </div>
    </div>
  );
};

export default CreditWidget;
