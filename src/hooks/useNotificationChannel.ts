import { pusherClient } from "@/lib/pusher";
import { Channel } from "pusher-js";
import { useCallback, useEffect, useRef } from "react";
import { videoStore } from "@/lib/store/videoStore";
import {
  showErrorToast,
  showSuccessToast,
} from "@/components/toastComponet/toastComponent";
import { creditStore } from "@/lib/store/creditStore";

type incomingDataPusher = {
  videoObj: EachVideo;
  minutesTaken: number;
};

export const useNotificationChannel = (userId: string | null) => {
  const channelRef = useRef<Channel | null>(null);
  const updateVideoArray = videoStore((state) => state.updateVideoArray);
  const removeVideo = videoStore((state) => state.removeVideo);
  const removeCredit = creditStore((state) => state.removeCredits);

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

      removeCredit();
      removeVideo(data.videoObj.id);
      updateVideoArray(data.videoObj);
    },
    [updateVideoArray, removeVideo, removeCredit]
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

  const handlePaymentNotification = useCallback(async (data: any) => {
    console.log("Data received in handlePaymentNotification", data);

    showSuccessToast(
      "You hava successfully paid the amount",
      `Paid ${data.amount / 100} Rs.`
    );
  }, []);

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

      channelRef.current.bind("payment:successfull", handlePaymentNotification);
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

        channelRef.current.unbind(
          "payment:successfull",
          handlePaymentNotification
        );

        channelRef.current = null;
      }
    };
  }, [
    userId,
    handleVideoGeneratedNotification,
    handleVideoGenerationFailedNotification,
    handlePaymentNotification,
  ]);
};
