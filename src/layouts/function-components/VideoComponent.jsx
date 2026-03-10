import { useState } from "react";

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width,
}) => {
  const [play, setPlay] = useState(false);

  return (
    <>
      {!play ? (
        <div className="relative text-center h-auto w-full">
          <button className="video-play-btn" onClick={() => setPlay(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <img
            width={width}
            height={height}
            src={src}
            alt={title}
            className="inline h-auto max-w-full rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="youtube mx-auto text-center">
          <div
            className={`aspect-video ${video_height} ${video_width} max-w-full overflow-hidden rounded-xl bg-transparent`}
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video_id}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
