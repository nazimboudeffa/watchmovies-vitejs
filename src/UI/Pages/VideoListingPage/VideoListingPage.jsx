import React from "react";
import "./videolistingpage.css";
import { VideoListing, MustWatch } from "../../../components/";
import { moviesDataFetcher } from "../../../utils/movies-data-fetcher";
import { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
const VideoListingPage = () => {
  const [videos, setVideos] = useState([]);

  const [videoCategory, setVideoCategory] = useState(null);

  const getMoviesData = async () => {
    try {
      const videoData = await moviesDataFetcher();
      if (videoData.status === 200) {
        setVideos(videoData.data.videos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  const filterVideos = (movieList) => {
    return (type) => {
      const filterMovies = movieList.filter((movie) =>
        type === null
          ? movie
          : type !== "CLEAR_ALL"
          ? movie.types.includes(type)
          : movie
      );
      return filterMovies;
    };
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main className="mt-3">
        <section className="video-lists-container flex flex-wrap gap-3">
          <button
            className="btn-outline-primary btn btn-sm btn-round-20  btn-py-1 pills "
            onClick={() => {
              setVideoCategory("Sci-Fi");
            }}
          >
            <span className="icon-pad-right">Sci-Fi </span>
          </button>

          <button
            className="btn-outline-primary btn btn-sm btn-round-20  btn-py-1 pills"
            onClick={() => setVideoCategory("Action")}
          >
            <span className="icon-pad-right">Action </span>
          </button>

          <button
            className="btn-outline-primary btn btn-sm btn-round-20  btn-py-1 pills"
            onClick={() => setVideoCategory("Drama")}
          >
            <span className="icon-pad-right">Drama </span>
          </button>

          <button
            className="btn-outline-primary btn btn-sm btn-round-20  btn-py-1 pills"
            onClick={() => setVideoCategory("Comedy")}
          >
            <span className="icon-pad-right">Comedy </span>
          </button>

          <button
            className="btn-outline-primary btn btn-sm btn-round-20  btn-py-1 pills"
            onClick={() => setVideoCategory("CLEAR_ALL")}
          >
            <span className="icon-pad-right">All Genre</span>
          </button>
        </section>
        <section>
          <div className="flex flex-wrap gap-3 pb-3 justify-center">
            <VideoListing VIDEOS={filterVideos(videos)(videoCategory)} />
          </div>
        </section>
        <section className="mt-3">
          <div className="pt-3">
            <div className="flex flex-between">
              <div>
                <span className="font-bold label-text label-text-dark">
                  Must watch
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pb-3 justify-center mt-2">
            <MustWatch />
          </div>
        </section>
      </main>
    </>
  );
};

export { VideoListingPage };
