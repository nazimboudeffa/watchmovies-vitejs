import React from "react";
import { List } from "../../../components";
import { usePlayListData } from "../../../hook/";
import { Link } from "react-router-dom";
import "./playlistpage.css";
import { Toaster } from "react-hot-toast";

const PlaylistPage = () => {
  const { playlistState } = usePlayListData();

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <main className="mt-3">
        <section className="flex flex-wrap gap-1">
          <h1>
            {playlistState.length === 0
              ? `Playlist`
              : `You have ${playlistState.length} Playlist`}{" "}
          </h1>
        </section>
        <section>
          <div className="flex flex-wrap gap-1 pb-2 mt-1">
            {playlistState.length !== 0 &&
              playlistState.map((playlist, index) => {
                return (
                  <List
                    title={playlist.title}
                    videos={playlist.videos}
                    id={index}
                  />
                );
              })}
          </div>
        </section>

        {playlistState.length === 0 && (
          <>
            <div className="justify-center">
              <img
                src="undraw_video_files_fu10.png"
                alt="No-likes-video-found"
                className="mx-auto"
              />
              <h1>oops.. No Playlist found</h1>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export { PlaylistPage };
