import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="pt-20 h-[360px] md:h-[520px] lg:h-[720px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=vqzibtneK3g&t=2s"
          width=""
          height="100%"
          playing={true}
          loop={true}
          muted={true}
        />
      </div>
    </div>
  );
}

export default Video;
