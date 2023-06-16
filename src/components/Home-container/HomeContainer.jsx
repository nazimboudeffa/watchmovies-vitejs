import React, { useRef, useEffect, useState } from "react";
import "./home-container.css";
const HomeContainer = () => {
  const videoElement = useRef(null);

  const [muteState, setMuteState] = useState(true);
  useEffect(() => {
    videoElement.current.muted = muteState;
  });

  const toggleVideoMute = () => {
    setMuteState(!muteState);
    videoElement.current.muted = muteState;
  };
  return (
    <section>
      <video autoPlay={true} ref={videoElement} playsInline muted loop className="relative w-full h-full z-[-1]">
        <source
          src="https://res.cloudinary.com/daemrjn5v/video/upload/v1686775948/videos/Charlie_Chaplin_-_Modern_Times_Trailer_ykawjd.mp4"
          type="video/mp4" />
      </video>

      <div className="absolute top-0 mt-[calc(5rem+3rem)] ml-7">
        <div className="w-10 sm:w-20 md:w-30 lg:w-40 xl:w-50">
          <img
            src="https://res.cloudinary.com/daemrjn5v/image/upload/v1686776512/posters/Charlie_Chaplin_-_Modern_Times_h0ojon.jpg"
            alt="modern-times" />
        </div>
        <div className="mt-5 flex flex-col gap-3 text-white">
          <div className="flex flex-row gap-3">
            <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Modern Times</h1>
            <div className="rounded-md border border-white p-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">13+</div>
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl w-50">
            Masterpiece of Chaplin, great family comedy-drama while Charlie Chaplin portrays a factory worker in this wonderful almost completely silent comedy.
          </p>
          <div className="flex flex-row gap-3">
            <button
              className="play-btn btn btn-sm flex flex-align-item-center"
              title="Feature not available "
            >
              <span className="material-icons pr-02">play_arrow</span>
              <span>Play</span>
            </button>

            <div className="badge" onClick={toggleVideoMute}>
              <span className="material-icons icon-badge badge-status-shadow">
                {muteState ? "volume_off" : "volume_up"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeContainer };
