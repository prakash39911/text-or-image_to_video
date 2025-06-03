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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
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

// "use client"

// import { useEffect, useRef } from "react"
// import ReactPlayer from "react-player"
// import { X, Download } from "lucide-react"
// import type { Video } from "./video-gallery"

// interface VideoModalProps {
//   video: Video
//   onClose: () => void
// }

// export default function VideoModal({ video, onClose }: VideoModalProps) {
//   const modalRef = useRef<HTMLDivElement>(null)

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//         onClose()
//       }
//     }

//     // Close modal on escape key
//     const handleEscKey = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         onClose()
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     document.addEventListener("keydown", handleEscKey)

//     // Prevent scrolling when modal is open
//     document.body.style.overflow = "hidden"

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//       document.removeEventListener("keydown", handleEscKey)
//       document.body.style.overflow = "auto"
//     }
//   }, [onClose])

//   const handleDownload = () => {
//     const link = document.createElement("a")
//     link.href = video.url
//     link.download = `${video.title || "video"}.mp4`
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
//       <div
//         ref={modalRef}
//         className="relative bg-gray-900 rounded-lg overflow-hidden max-w-md w-full max-h-[90vh] animate-scale-in"
//         style={{ aspectRatio: "9/16" }}
//       >
//         <ReactPlayer
//           url={video.url}
//           width="100%"
//           height="100%"
//           playing={true}
//           controls={true}
//           playsinline={true}
//           config={{
//             file: {
//               attributes: {
//                 style: {
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 },
//               },
//             },
//           }}
//         />

//         {/* Modal controls */}
//         <div className="absolute top-4 right-4 flex space-x-2">
//           <button
//             onClick={handleDownload}
//             className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full transition-transform hover:scale-110"
//             aria-label="Download video"
//           >
//             <Download size={20} />
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-full transition-transform hover:scale-110"
//             aria-label="Close modal"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Video title */}
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
//           <h3 className="text-white font-medium">{video.title}</h3>
//         </div>
//       </div>
//     </div>
//   )
// }
