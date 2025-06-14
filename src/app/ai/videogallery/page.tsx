import { GetAllGeneratedVideos } from "@/app/actions/galleryActions";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import React from "react";

export default async function page() {
  const videoList = await GetAllGeneratedVideos();

  if (!videoList) {
    return (
      <div className="flex vertical-center justify-center items-center text-3xl text-gray-300">
        No Videos Generated..
      </div>
    );
  }

  return (
    <div>
      <VideoGallery videos={videoList} />
    </div>
  );
}
