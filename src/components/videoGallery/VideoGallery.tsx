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
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setVideoArray(videos);
    setisLoading(false);

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
    // 1. Create a helper function to generate the download URL
    const createDownloadUrl = (originalUrl: string, title: string) => {
      // Sanitize the title to be URL-friendly for the filename
      const safeTitle = title.replace(/[^a-zA-Z0-9_.-]/g, "_");
      const parts = originalUrl.split("/upload/");

      // Check if the URL structure is as expected
      if (parts.length !== 2) {
        console.error("Unexpected Cloudinary URL format.");
        return originalUrl; // Fallback to original URL
      }

      // Construct the new URL with the fl_attachment flag
      // e.g., fl_attachment:my_video_title
      const downloadFlag = `fl_attachment:${safeTitle}`;
      return `${parts[0]}/upload/${downloadFlag}/${parts[1]}`;
    };

    const downloadUrl = createDownloadUrl(video.url, video.title);

    // 2. Use the new URL to create the link
    const link = document.createElement("a");
    link.href = downloadUrl;

    // The 'download' attribute is now a fallback, but the URL flag does the main work.
    // The filename in the URL takes precedence.
    link.download = `${video.title}.mp4`;

    // 3. Trigger the download (no changes here)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r text-transparent bg-clip-text bg-teal-500">
          Video Gallery
        </h1>
      </div>
      {videosArray && videosArray.length === 0 ? (
        <div className="vertical-center flex justify-center mt-20 text-xl text-teal-500">
          No Video Found..
        </div>
      ) : (
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
      )}
      {/* Video Grid - Made tiles larger by reducing number of columns */}

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
