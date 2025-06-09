import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  width?: string | number;
  height?: string | number;
  controls?: boolean;
  playing?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  onReady?: () => void; // Add this new prop
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  width = "100%",
  height = "100%",
  controls = true,
  playing = false,
  muted = true,
  loop = false,
  className = "",
  onReady, // Destructure the new prop
}) => {
  return (
    <div className={`relative ${className}`}>
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls={controls}
        playing={playing}
        muted={muted}
        loop={loop}
        onReady={onReady} // Pass it down to ReactPlayer
        config={{
          file: {
            attributes: {
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
