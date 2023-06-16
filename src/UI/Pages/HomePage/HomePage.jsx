import React from "react";
import { HomeContainer } from "../../../components";
import "./homepage.css";
import { Toaster } from "react-hot-toast";
import Footer2 from "../../../components/Footer2";

const HomePage = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <main>
        <HomeContainer />
      </main>
      <Footer2 />
    </>
  );
};

export { HomePage };
