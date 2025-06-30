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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md mx-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 cursor-pointer sm:-top-14 right-0 text-white hover:text-teal-400 transition-colors duration-200 z-20 bg-black/50 rounded-full p-2 sm:p-3"
        >
          <X size={24} className="sm:w-8 sm:h-8" />
        </button>

        {/* Video Container */}
        <div className="rounded-lg overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
          {/* Video Player Container */}
          <div className="relative flex-1 min-h-0">
            <div className="aspect-[9/16] sm:aspect-[9/16] md:aspect-[9/16] lg:aspect-[9/16] relative max-h-[75vh] sm:max-h-[80vh] md:max-h-[85vh]">
              <VideoPlayer
                url={video.url}
                playing={true}
                controls={true}
                muted={false}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default VideoModal;
