import React, { useState, useRef, useEffect } from "react";
import { Download } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";

interface VideoCardProps {
  video: {
    id: string;
    url: string;
    title: string;
    thumbnail: string;
  };
  onVideoClick: (video: any) => void;
  onDownload: (video: any) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onVideoClick,
  onDownload,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPreview(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload(video);
  };

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onVideoClick(video)}
    >
      {/* Card Container - Made larger */}
      <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Thumbnail or Video Preview */}
        {showPreview ? (
          <div className="absolute inset-0">
            <VideoPlayer
              url={video.url}
              playing={true}
              controls={false}
              muted={true}
              loop={true}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              width={300}
              height={300}
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Download Button */}
        {isHovered && (
          <button
            onClick={handleDownload}
            className="absolute top-3 right-3 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110 animate-fade-in"
          >
            <Download size={16} />
          </button>
        )}

        {/* Video Title - No background, just text */}
        <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-medium text-sm truncate">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
