import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  useDescriptionData,
  useHistoryData,
  useWatchLaterData
} from "../../hook/";


import { Toaster } from "react-hot-toast";

import { useToast } from "../../contexts";
import "./navbar.css";
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
      setNavbarStyle("col-black solid");
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
        className={`nav navbar-fixed flex flex-wrap flex-between  navbar-bg nav-zindex fixed-top ${navbarStyle}`}
        id="navbar"
      >
        <div className="flex flex-space-evenly flex-align-item-center ">
          <ul className=" text-deocration-none flex flex-wrap flex-align-item-center gap">
            <li className="pb-1 nav-text flex flex-align-item-center gap-1 hide">
              <span className="material-icons snackbar-icons  navbar-icons">
                menu
              </span>
            </li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "actives list-style-none"
                  : "inactives list-style-none"
              }
            >
              <li className="pb-1  flex flex-align-item-center gap-1">
                <span className="font-bold label-text ">Bled+</span>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="flex flex-space-evenly flex-align-item-center ">
          <ul className=" text-deocration-none flex flex-wrap gap-col-2">
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
