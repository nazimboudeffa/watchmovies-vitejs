import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="rounded-md border border-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">13+</div>
          </div>
          <p className="text-left w-40 md:w-80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            The film, which was set during the Great Depression, centres on a luckless factory worker ...
          </p>
          <div className="flex flex-row gap-3">
            <Link to="/watch/1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 sm:w-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
            </svg>
            </Link>

            <div className="badge" onClick={toggleVideoMute}>
              {muteState ? 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 sm:w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 sm:w-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HomeContainer };
