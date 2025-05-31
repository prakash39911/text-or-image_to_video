"use client";

import React, { useEffect, useRef } from "react";
import { Type, Video, LucideIcon } from "lucide-react";
import Image from "next/image";

// Define a proper type for the step items
interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      icon: Type,
      title: "Add Prompt or Images",
      description:
        "Write or paste your script, captions, or text content that you want to convert into video.",
      imageSrc:
        "https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg",
    },
    {
      icon: Video,
      title: "Generate Video",
      description:
        "Our AI combines everything into a professional video you can download or share.",
      imageSrc:
        "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.remove("translate-y-8");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Capture current values to avoid the cleanup function issue
    const currentSectionRef = sectionRef.current;
    const currentStepRefs = stepRefs.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    currentStepRefs.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      // Use the captured values in cleanup
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      currentStepRefs.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-900/50 relative opacity-0 translate-y-8 transition-all duration-1000"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 rounded-full text-teal-400 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create Amazing Videos in{" "}
            <span className="bg-gradient-to-r from-teal-400 to-sky-500 bg-clip-text text-transparent">
              Just Four Steps
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Our intuitive platform makes video creation simple and
            straightforward. No technical expertise required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Connector Line - Desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 hidden lg:block"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number - Desktop */}
              <div className="absolute -top-4 left-1/2 lg:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 items-center justify-center text-white font-semibold text-sm z-10 hidden lg:flex">
                {index + 1}
              </div>

              <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                <div className="bg-gray-800/90 backdrop-blur rounded-lg border border-gray-700/50 overflow-hidden h-full transition-transform duration-300 hover:transform hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      height={300}
                      width={400}
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {/* Step Number - Mobile */}
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 flex items-center justify-center text-white font-semibold text-xs lg:hidden">
                        {index + 1}
                      </div>

                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                        {React.createElement(step.icon, {
                          size: 18,
                          className: "text-pink-400",
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
