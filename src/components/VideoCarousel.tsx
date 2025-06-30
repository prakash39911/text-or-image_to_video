import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Sample video data - using placeholder videos
  const videos: Video[] = [
    {
      id: 1,
      title: "Product Demo 1",
      url: "https://res.cloudinary.com/prakashcloud/video/upload/v1751257113/text-to-video/finalVideo/bsmrrsabt2juais62sft.mp4",
      thumbnail:
        "https://res.cloudinary.com/prakashcloud/image/upload/v1751256866/text-to-video/image/xznj8yogh85iqh6u0xsu.jpg",
    },
    {
      id: 2,
      title: "Product Demo 2",
      url: "https://res.cloudinary.com/prakashcloud/video/upload/v1751214567/kling_7e4a28b3-ae17-4a6b-85e9-ff03c9fda8a3_prdm1a.mp4",
      thumbnail:
        "https://res.cloudinary.com/prakashcloud/image/upload/v1748747131/text-to-video/image/tvoyqtocvxprqfomm1xs.jpg",
    },
    {
      id: 3,
      title: "Product Demo 3",
      url: "https://res.cloudinary.com/prakashcloud/video/upload/v1749059992/text-to-video/finalVideo/v2o2u8oiwgpmu8qjtoj4.mp4",
      thumbnail:
        "https://res.cloudinary.com/prakashcloud/image/upload/v1749059761/text-to-video/image/j9iigugyzqu24emzidwk.jpg",
    },
  ];

  const nextVideo = () => {
    // Stop current video when switching
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    // Stop current video when switching
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
    setIsPlaying(false);
  };

  const togglePlay = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
        setIsPlaying(false);
      } else {
        currentVideo.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  // Effect to handle video playback state
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      // Reset video to beginning when switching
      currentVideo.currentTime = 0;

      // Add event listener for video end
      currentVideo.addEventListener("ended", handleVideoEnd);

      return () => {
        currentVideo.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, [currentIndex]);

  const getVideoPosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return "translate-x-0 scale-100 z-20 opacity-100";
    if (diff === 1 || diff === -(videos.length - 1))
      return "translate-x-[85%] scale-75 z-10 opacity-60";
    if (diff === -1 || diff === videos.length - 1)
      return "translate-x-[-85%] scale-75 z-10 opacity-60";
    return "translate-x-full scale-50 z-0 opacity-0";
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8">
      {/* Video Carousel Container */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Video Players */}
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute transition-all duration-700 ease-in-out transform ${getVideoPosition(index)}`}
            style={{ width: "280px", height: "500px" }}
            onMouseEnter={() => index === currentIndex && setIsHovering(true)}
            onMouseLeave={() => index === currentIndex && setIsHovering(false)}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800">
              {/* Video Element */}
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="w-full h-full object-cover"
                poster={video.thumbnail}
                muted
                playsInline
                onEnded={handleVideoEnd}
              >
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Play/Pause Button - Only on active video and with hover visibility */}
              {index === currentIndex && (
                <button
                  onClick={togglePlay}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                           bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 
                           hover:bg-white/30 transition-all duration-300 group ${
                             isPlaying && !isHovering
                               ? "opacity-0 pointer-events-none"
                               : "opacity-100"
                           }`}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              )}

              {/* Video Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {video.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {videos.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i === currentIndex ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Side Video Overlay */}
              {index !== currentIndex && (
                <div
                  className="absolute inset-0 bg-black/40 cursor-pointer"
                  onClick={
                    index > currentIndex ||
                    (currentIndex === videos.length - 1 && index === 0)
                      ? nextVideo
                      : prevVideo
                  }
                />
              )}
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevVideo}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30
                   bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3
                   hover:bg-black/70 hover:border-white/40 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextVideo}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30
                   bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3
                   hover:bg-black/70 hover:border-white/40 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
