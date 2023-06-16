import React from "react";
import { HomeContainer } from "../../../components";
import "./homepage.css";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main>
        <HomeContainer />
      </main>
    </>
  );
};

export { HomePage };
