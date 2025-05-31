import React from "react";
import { VideoIcon, Image, PenLine, Gauge } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: VideoIcon,
      title: "AI Video Generation",
      description:
        "Turn your ideas into fully-produced Short videos with just a few clicks using our advanced AI technology.",
      variant: "highlighted" as const,
    },
    {
      icon: Image,
      title: "Image To Video",
      description: "Seamlessly convert your images into Proper Short Video",
    },
    {
      icon: Image,
      title: "Text To Video",
      description: "Seamlessly convert your Text or prompt to Short Video",
    },
    {
      icon: PenLine,
      title: "Custom Prompt",
      description: "Tweak Your Prompt and get the desired result",
    },
    {
      icon: Gauge,
      title: "Fast Rendering",
      description:
        "Generate videos in minutes, not hours, with our optimized cloud rendering engine.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-teal-500/10 rounded-full text-teal-400 text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Short Videos
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Our AI-powered platform combines cutting-edge technology with an
            intuitive interface to help you create stunning Short videos with
            minimal effort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant={feature.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
