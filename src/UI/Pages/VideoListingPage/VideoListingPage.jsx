import React from "react";
import "./videolistingpage.css";
import { VideoListing2 } from "../../../components/VideoListing2";
import { MustWatch } from "../../../components";
import { moviesDataFetcher } from "../../../utils/movies-data-fetcher";
import { Toaster } from "react-hot-toast";

import { useEffect, useState } from "react";
const VideoListingPage = () => {
  const [videos, setVideos] = useState([]);

  const [videoType, setVideoType] = useState(null);

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
        <section className="flex flex-wrap gap-3 mb-3">
          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoType("CLEAR_ALL")}
          >
            All
          </button>
          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => {
              setVideoType("Sci-Fi");
            }}
          >
            Sci-Fi
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoType("Action")}
          >
            Action
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoType("Drama")}
          >
            Drama
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoType("Comedy")}
          >
            Comedy
          </button>

        </section>
        <section>
          <div className="flex flex-wrap justify-between">
            <VideoListing2 videos={filterVideos(videos)(videoType)} />
          </div>
        </section>
      </main>
    </>
  );
};

export { VideoListingPage };
