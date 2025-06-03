import { GetAllGeneratedVideos } from "@/app/actions/galleryActions";
import { auth } from "@/app/auth";
import VideoGallery from "@/components/videoGallery/VideoGallery";
import { CalcNoOfVideosInProgress } from "@/lib/utilityFunctions";
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

  const generatingCount = CalcNoOfVideosInProgress(videoList);

  return (
    <div>
      <VideoGallery
        videos={videoList}
        generatingCount={generatingCount}
        isGenerating={generatingCount > 0 ? true : false}
      />
    </div>
  );
}
