import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useDescriptionData,
  useHistoryData,
  useWatchLaterData
} from "../../hook/";


import { Toaster } from "react-hot-toast";

import { useToast } from "../../contexts";
//import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const { notifySuccess, notifyError } = useToast();

  const {
    likeVideoState: { likedVideos },
  } = useDescriptionData();

  const {
    historyState: { historyVideos },
  } = useHistoryData();
  const {
    watchLaterState: { watchLaterVideos },
  } = useWatchLaterData();

  const [navbarStyle, setNavbarStyle] = useState("");

  const navbarStyleChange = () => {
    if (window.scrollY > 20) {
      setNavbarStyle("bg-zinc-900");
    } else {
      setNavbarStyle("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarStyleChange);

    return () => {
      window.removeEventListener("scroll", navbarStyleChange);
    };
  }, []);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <nav
        className={`flex justify-between px-10 py-5 items-center bg-zinc-500 sticky top-0 z-10 ${navbarStyle}`}
      >

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "actives list-style-none"
              : "inactives list-style-none"
          }
        >
          <h1 class="text-xl text-white font-bold">Bled+</h1>
        </NavLink>


        <div className="flex items-center text-white">
          <ul className="flex items-center  space-x-6">
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? "actives" : "inactives")}
            >
              <li className="pb-1 nav-text  flex flex-align-item-center gap-1">
                <span className="material-icons label-text">movie_filter</span>
                <span className="label-text">Movies</span>
              </li>
            </NavLink>
            <NavLink
              to="/likeplaylist"
              className={({ isActive }) => (isActive ? "actives" : "inactives")}
            >
              <li className="pb-1 nav-text  flex flex-align-item-center gap-1">
                <span className="material-icons label-text">thumb_up_alt</span>
                <span className="label-text">
                  Liked videos {likedVideos.length > 0 ? likedVideos.length : ""}
                </span>
              </li>
            </NavLink>

            <NavLink
              to="/watchlater"
              className={({ isActive }) => (isActive ? "actives" : "inactives")}
            >
              <li className="pb-1 nav-text  flex flex-align-item-center gap-1 badge">
                <span className="material-icons label-text ">watch_later</span>

                <span className=" label-text">
                  Watch later{" "}
                  {watchLaterVideos.length > 0 ? watchLaterVideos.length : ""}
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) => (isActive ? "actives" : "inactives")}
            >
              <li className="pb-1 nav-text  flex flex-align-item-center gap-1 badge">
                <span className="material-icons label-text">history</span>

                <span className=" label-text">
                  History {historyVideos.length > 0 ? historyVideos.length : ""}
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/playlist"
              className={({ isActive }) => (isActive ? "actives" : "inactives")}
            >
              <li className="pb-1 nav-text  flex flex-align-item-center gap-1 badge">
                <span className="material-icons label-text">queue</span>

                <span className=" label-text">Playlist</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
