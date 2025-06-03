import { pusherClient } from "@/lib/pusher";
import { Channel } from "pusher-js";
import { useCallback, useEffect, useRef } from "react";
import { toast } from "sonner";
import { videoStore } from "@/lib/store/videoStore";

export const useNotificationChannel = (userId: string | null) => {
  const channelRef = useRef<Channel | null>(null);
  const setVideoArray = videoStore((state) => state.setVideoArray);

  const handleVideoGeneratedNotification = useCallback(
    async (data: any) => {
      console.log(
        "Incoming data in UseNotificationChannel hook using Pusher --",
        data
      );

      toast(`Video Generation Complete for your Prompt -`, {
        duration: 5000,
        className: "text-bold text-xl text-teal-500",
      });

      setVideoArray(data);
    },
    [setVideoArray]
  );

  useEffect(() => {
    if (!userId) return;

    if (!channelRef.current) {
      channelRef.current = pusherClient.subscribe(`private-${userId}`);

      channelRef.current.bind(
        "video:generated",
        handleVideoGeneratedNotification
      );
    }

    return () => {
      if (channelRef.current && channelRef.current.subscribed) {
        channelRef.current.unsubscribe();

        channelRef.current.unbind(
          "video:generated",
          handleVideoGeneratedNotification
        );

        channelRef.current = null;
      }
    };
  }, [userId, handleVideoGeneratedNotification]);
};
