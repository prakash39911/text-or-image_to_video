import { pusherClient } from "@/lib/pusher";
import { Channel } from "pusher-js";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import { videoStore } from "@/lib/store/videoStore";
import {
  showErrorToast,
  showSuccessToast,
} from "@/components/toastComponet/toastComponent";

type incomingDataPusher = {
  videoObj: EachVideo;
  minutesTaken: number;
};

export const useNotificationChannel = (userId: string | null) => {
  const channelRef = useRef<Channel | null>(null);
  const updateVideoArray = videoStore((state) => state.updateVideoArray);
  const removeVideo = videoStore((state) => state.removeVideo);

  const handleVideoGeneratedNotification = useCallback(
    async (data: incomingDataPusher) => {
      console.log(
        "Incoming data in UseNotificationChannel hook using Pusher --",
        data
      );

      showSuccessToast(
        `Video Generated Successfully within ${data.minutesTaken} minutes`,
        `For the prompt ${data.videoObj.title}`
      );

      removeVideo(data.videoObj.id);
      updateVideoArray(data.videoObj);
    },
    [updateVideoArray, removeVideo]
  );

  const handleVideoGenerationFailedNotification = useCallback(
    async (data: { id: string; status: string; prompt: string }) => {
      console.log(
        "Incoming Data in useNotification challen for failed video generation",
        data
      );

      showErrorToast(`Video generation failed for Prompt ${prompt}`, "Error");

      removeVideo(data.id);
    },
    [removeVideo]
  );

  useEffect(() => {
    if (!userId) return;

    if (!channelRef.current) {
      channelRef.current = pusherClient.subscribe(`private-${userId}`);

      channelRef.current.bind(
        "video:generated",
        handleVideoGeneratedNotification
      );
      channelRef.current.bind(
        "videoGeneration:failed",
        handleVideoGenerationFailedNotification
      );
    }

    return () => {
      if (channelRef.current && channelRef.current.subscribed) {
        channelRef.current.unsubscribe();

        channelRef.current.unbind(
          "video:generated",
          handleVideoGeneratedNotification
        );

        channelRef.current.unbind(
          "videoGeneration:failed",
          handleVideoGenerationFailedNotification
        );

        channelRef.current = null;
      }
    };
  }, [
    userId,
    handleVideoGeneratedNotification,
    handleVideoGenerationFailedNotification,
  ]);
};
