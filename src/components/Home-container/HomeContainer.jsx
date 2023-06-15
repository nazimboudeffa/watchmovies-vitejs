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
    <section className="header">
      <div className="overlay"></div>
      <video autoPlay={true} ref={videoElement} playsInline muted loop>
        <source
          src="https://res.cloudinary.com/daemrjn5v/video/upload/v1686775948/videos/Charlie_Chaplin_-_Modern_Times_Trailer_ykawjd.mp4"
          type="video/mp4"
        />
      </video>

      <div className="movie-info  w-50">
        <div className="movie-img ">
          <img
            className="video-img-title"
            src="https://res.cloudinary.com/daemrjn5v/image/upload/v1686776512/posters/Charlie_Chaplin_-_Modern_Times_h0ojon.jpg"
            alt="modern-times"
          />
        </div>
        <div className="mt-2 ml-3  flex flex-column gap font-white">
          <div className="flex flex-row flex-align-item-center flex-justify-item-center gap">
            <h1 className="font-white font-bold font-sm">Modern Times</h1>
            <button className=" pl-04 pr-04 pt-03 pb-03 movie-rating-btn">
              <span className="font-ex-sm">13+</span>
            </button>
          </div>
          <p className="movie-desc font-white ">
          Masterpiece of Chaplin, great family comedy-drama while Charlie Chaplin portrays a factory worker in this wonderful almost completely silent comedy.
          </p>
          <div className="flex flex-row gap">
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
