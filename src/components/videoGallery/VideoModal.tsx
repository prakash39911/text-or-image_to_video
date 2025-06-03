import React, { useEffect } from "react";
import { X } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: {
    id: string;
    url: string;
    title: string;
    thumbnail: string;
  } | null;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-teal-400 transition-colors duration-200 z-20"
        >
          <X size={32} />
        </button>

        {/* Video Container */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-[9/16] relative">
            <VideoPlayer
              url={video.url}
              playing={true}
              controls={true}
              muted={false}
              className="w-full h-full"
            />
          </div>

          {/* Video Info */}
          <div className="p-4 bg-transparent text-center">
            <h3 className=" font-semibold text-lg">{video.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
