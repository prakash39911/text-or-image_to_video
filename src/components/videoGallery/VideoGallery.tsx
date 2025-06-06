"use client";

import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import LoadingState from "./LoadingState";
import VideoModal from "./VideoModal";
import { videoStore } from "@/lib/store/videoStore";

interface VideoGalleryProps {
  videos: EachVideo[];
}

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const setVideoArray = videoStore((state) => state.setVideoArray);
  const videosArray = videoStore((state) => state.videosArray);
  const reset = videoStore((state) => state.reset);

  const [selectedVideo, setSelectedVideo] = useState<EachVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setVideoArray(videos);

    return () => {
      reset();
    };
  }, [setVideoArray, videos, reset]);

  const handleVideoClick = (video: EachVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleDownload = (video: EachVideo) => {
    const link = document.createElement("a");
    link.href = video.url;
    link.download = `${video.title}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (videosArray.length === 0) {
    return null;
  }

  return (
    <div className="h-full bg-zinc-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r text-transparent bg-clip-text bg-teal-500">
          Video Gallery
        </h1>
      </div>

      {/* Video Grid - Made tiles larger by reducing number of columns */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Video Cards */}
          {videosArray.map((video) => {
            if (video.status === "Completed") {
              return (
                <VideoCard
                  key={video.id}
                  video={video}
                  onVideoClick={handleVideoClick}
                  onDownload={handleDownload}
                />
              );
            } else if (video.status === "InProgress") {
              return <LoadingState key={video.id} />;
            }
          })}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        video={selectedVideo}
      />
    </div>
  );
};

export default VideoGallery;
