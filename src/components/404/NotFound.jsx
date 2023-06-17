import React from "react";
import "./notfound.css";
const NotFound = () => {
  return (
    <>
      <section className="justify-center">
        <img
          className="mx-auto"
          src="undraw_fixing_bugs_w7gi.png"
          alt="Not-found-404"
        />
        <h2>Oops.. page not found</h2>
      </section>
    </>
  );
};

export { NotFound };
