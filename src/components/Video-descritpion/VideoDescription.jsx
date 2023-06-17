import React, { useState, useEffect, useCallback } from "react";
import "./video-description.css";

import { viewsFormatter } from "../../utils/views-formatter";
import { useSingleVideoData, useDescriptionData } from "../../hook/";

import { likeVideo } from "../../utils/";

import { Modal } from "../index";
import { useToast } from "../../contexts";

const VideoDescription = () => {
  const [responseStatus, setResponseStatus] = useState();
  const [modalStatus, setModalStatus] = useState(null);
  const { movieDetail, watchId } = useSingleVideoData();
  const { notifySuccess, notifyError } = useToast();

  const {
    likeVideoState: { likedVideos },
    likeVideoDispatch,
  } = useDescriptionData();

  const addLike = async () => {
    const datas = await likeVideo(movieDetail);
    if (datas.status === 201) {
      notifySuccess("Video liked");
      likeVideoDispatch({ type: "LIKE", payload: movieDetail });
      setResponseStatus(201);
    } else if (datas.status === 409) {
      notifySuccess("Video is already liked");
      setResponseStatus(409);
    }
  };

  console.log();
  return (
    <>
      <div className="text-xl mt-7">
        <h2>{movieDetail.title}</h2>
      </div>
      <div className="mt-3 mb-3">
        <div className="flex flex-row">
          <div className="flex flex-row gap-2">
            <span className="text-sm ">
              {viewsFormatter(movieDetail.viewCount)}
            </span>
            <span className="text-sm">views</span>
          </div>
        </div>
        <div className="flex flex-row gap-3 mt-5">
          <div
            className="like flex flex-justify-center flex-align-item-center gap-1"
            onClick={() => {
              addLike();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
            </svg>

            <span>
              {responseStatus === 201
                ? "Liked"
                : responseStatus === 409
                ? "Liked"
                : "Like"}
            </span>
          </div>
          <div className="flex flex-row gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
          </svg>

            <span>Share</span>
          </div>

          <div
            className="flex flex-row gap-1"
            onClick={() => {
              setModalStatus(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>

            <span>Add to playlist</span>
          </div>
          {modalStatus && (
            <Modal
              STATUS={modalStatus}
              SETMODALSTATUS={setModalStatus}
              MOVIEDETAIL={movieDetail}
            />
          )}
        </div>
      </div>
      <hr />
      <div className="justify-center mt-1">
        <h5 className="mb-1 text-xl">Description</h5>
        <p className="mb-2">{movieDetail.description}</p>
      </div>
    </>
  );
};

export { VideoDescription };
