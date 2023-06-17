import React from "react";
import { Link } from "react-router-dom";
import { viewsFormatter } from "../utils/views-formatter";
import { addwatchLater, deletewatchLater, historyVideo } from "../utils";
import { useWatchLaterData, useHistoryData } from "../hook";
import { useToast } from "../contexts";

const VideoCard = ({ video }) => {
    const {
        watchLaterState: { watchLaterVideos },
        watchLaterDispatch,
      } = useWatchLaterData();
    
      const { historyState, historyDispatch } = useHistoryData();
      const { notifySuccess, notifyError } = useToast();
    
      const addVideoToHistory = async (movieDetail) => {
        const data = await historyVideo(movieDetail);
        if (data.status === 201) {
          notifySuccess("Video added to history");
          historyDispatch({ type: "ADD_TO_HISTORY", payload: movieDetail });
        }
      };
    
      const addToWatchLater = async (video) => {
        const data = await addwatchLater(video);
    
        if (data.status === 201) {
          notifySuccess("Video added to watch later");
    
          watchLaterDispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
        }
      };
    
      const removeToWatchLater = async (video, videoid) => {
        const data = await deletewatchLater(videoid);
        if (data.status === 200) {
          notifySuccess("Video remove from watch later");
          watchLaterDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video });
        }
      };
    return (
        <div className="bg-zinc-700 p-2 my-2 text-center text-white">
            <div className="relative flex flex-col">
              <img
                alt={video.title}
                src={`https://images.weserv.nl/?url=${video.imgurl}`}
                className="h-24 w-full object-cover sm:h-32"
              />
              {watchLaterVideos.some((e) => e._id === video._id) ? (
              
                <span
                  className="absolute top-0 right-0 m-5 cursor-pointer text-white"
                  onClick={() => {
                    removeToWatchLater(video, video._id);
                  }}
                  title="Remove from Watch later"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
                </svg>
                </span>
              ) : (
                <span
                  className="absolute top-0 right-0 m-5 cursor-pointer text-white"
                  onClick={() => {
                    addToWatchLater(video);
                  }}
                  title="Add to Watch later"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                </span>
              )}
            </div>
            <div className="flex flex-col pl-04 pt-1">
              <div className="font-bold pt-3 w-full">{video.title}</div>
              <div className="flex flox-row justify-between">
                <span>{video.director}</span> 
                <span>{video.publishedAt}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="bg-red-600 mt-3 w-20">
                <div className="flex pl-2 pr-3 pt-1 pb-1 flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="card-rating-padding" title="currently views">
                    {viewsFormatter(video.viewCount)}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                {video.types?.map((type) => {return (<span className="rounded-xl border-2 border-zinc-900 bg-zinc-900 p-1 text-xs mr-1">{type}</span>)})}
              </div>
            </div>
            <div className="flex justify-center pt-3 mt-1">
              <Link
                to={`/watch/${video._id}`}
                className="rounded-xl bg-teal-700 w-full pt-2 pb-2"
                onClick={() => {
                  addVideoToHistory(video);
                }}
              >
                Watch now !
              </Link>
            </div>
        </div>
    )
}

export { VideoCard }