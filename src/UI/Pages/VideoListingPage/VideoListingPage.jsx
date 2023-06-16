import React from "react";
import "./videolistingpage.css";
import { VideoListing2 } from "../../../components/VideoListing2";
import { MustWatch } from "../../../components";
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
        <section className="flex flex-wrap gap-3 mb-3">
          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoCategory("CLEAR_ALL")}
          >
            All
          </button>
          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => {
              setVideoCategory("Sci-Fi");
            }}
          >
            Sci-Fi
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoCategory("Action")}
          >
            Action
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoCategory("Drama")}
          >
            Drama
          </button>

          <button
            className="rounded-xl border-2 border-zinc-900 p-2 my-2 text-center hover:bg-zinc-900 hover:text-white"
            onClick={() => setVideoCategory("Comedy")}
          >
            Comedy
          </button>

        </section>
        <section>
          <div className="flex flex-wrap gap-3">
            <VideoListing2 videos={filterVideos(videos)(videoCategory)} />
          </div>
        </section>
      </main>
    </>
  );
};

export { VideoListingPage };
