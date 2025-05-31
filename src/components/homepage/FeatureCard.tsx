import React from "react";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "highlighted";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  variant = "default",
}) => {
  const isHighlighted = variant === "highlighted";

  return (
    <div
      className={`relative p-1 rounded-xl transition-all duration-500 ${
        isHighlighted
          ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20"
          : "hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-cyan-500/10"
      }`}
    >
      <div className="relative h-full p-6 md:p-8 bg-slate-800/90 backdrop-blur rounded-lg border border-slate-700/50 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <div
            className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center ${
              isHighlighted
                ? "bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/20"
                : "bg-slate-700"
            }`}
          >
            <Icon size={24} className="text-white" />
          </div>

          <h3
            className={`text-xl font-bold mb-3 ${
              isHighlighted
                ? "bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
                : "text-white"
            }`}
          >
            {title}
          </h3>

          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-150"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
