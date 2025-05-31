"use client";

import React, { useState } from "react";
import { Video, Play, PauseIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const ExamplesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Videos" },
    { id: "marketing", label: "Marketing" },
    { id: "education", label: "Education" },
  ];

  const examples = [
    {
      id: 1,
      title: "Product Showcase",
      category: "marketing",
      thumbnail:
        "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg",
      duration: "0:45",
    },
    {
      id: 2,
      title: "Tutorial Series",
      category: "education",
      thumbnail:
        "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      duration: "1:30",
    },
    {
      id: 3,
      title: "Social Media Story",
      category: "education",
      thumbnail:
        "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg",
      duration: "0:15",
    },
  ];

  const filteredExamples =
    activeCategory === "all"
      ? examples
      : examples.filter((ex) => ex.category === activeCategory);

  return (
    <section id="examples" className="py-20 px-6 md:px-12 lg:px-24 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-500/10 rounded-full text-teal-400 text-sm font-medium mb-4">
            Example Videos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What You Can{" "}
            <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Browse our collection of AI-generated Short videos to get inspired
            for your next project.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md shadow-purple-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredExamples.map((example) => (
            <VideoCard key={example.id} video={example} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            className="group cursor-pointer hover:border hover:border-teal-400"
          >
            <span>View All Examples</span>
            <div className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    duration: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        {video.thumbnail.length > 0 && (
          <Image
            src={video.thumbnail}
            alt={video.title}
            height={300}
            width={400}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110 blur-sm" : "scale-100"
            }`}
          />
        )}
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-60 transition-opacity duration-300 ${
          isHovered ? "opacity-90" : ""
        }`}
      ></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
          {isHovered ? (
            <Play size={28} className="text-white fill-white ml-1" />
          ) : (
            <PauseIcon size={28} className="text-white" />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            {video.title}
          </h3>
          <span className="px-2 py-1 bg-black/30 rounded text-xs text-white">
            {video.duration}
          </span>
        </div>
        <div className="mt-1 flex items-center text-xs text-gray-300">
          <Video size={14} className="mr-1" />
          <span className="capitalize">{video.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ExamplesSection;
