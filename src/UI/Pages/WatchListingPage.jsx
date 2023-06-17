import React from 'react';
import Carousel from 'better-react-carousel'
import { moviesDataFetcher } from "../../utils/movies-data-fetcher";
import { VideoCard } from "../../components/VideoCard";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const WatchListingPage = () => {
  const [videos, setVideos] = useState([]);

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

  return (
    <>
    
    <div className="flex flex-row justify-between pl-5 pr-5 mt-3">
        <span className="text-2xl font-bold text-center mt-3">Movies</span>
        <Link to="/movies">
        <span className="text-2xl font-bold text-center mt-3 underline">See more</span>
        </Link>
    </div>
    
    <Carousel cols={4} rows={1} gap={10} loop>
        {videos?.map((video) => {
            return (
                <Carousel.Item>
                    <VideoCard key={video._id} video={video} />
                </Carousel.Item>
            );
        })}
    </Carousel>

    <div className="flex flex-row justify-between pl-5 pr-5 mt-3">
        <span className="text-2xl font-bold text-center">Series</span>
        <Link to="/movies">
        <span className="text-2xl font-bold text-center mt-3 underline">See more</span>
        </Link>
    </div>
    
    <Carousel cols={4} rows={1} gap={10} loop>
        {videos?.map((video) => {
            return (
                <Carousel.Item>
                    <VideoCard key={video._id} video={video} />
                </Carousel.Item>
            );
        })}
    </Carousel>

    <div className="flex flex-row justify-between pl-5 pr-5 mt-3">
        <span className="text-2xl font-bold text-center">Tv Shows</span>
        <Link to="/movies">
        <span className="text-2xl font-bold text-center underline">See more</span>
        </Link>
    </div>
    
    <Carousel cols={4} rows={1} gap={10} loop>
        {videos?.map((video) => {
            return (
                <Carousel.Item>
                    <VideoCard key={video._id} video={video} />
                </Carousel.Item>
            );
        })}
    </Carousel>
    </>
  );
};

export { WatchListingPage };
