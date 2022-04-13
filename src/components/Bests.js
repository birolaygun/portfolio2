import React from "react";
import { search } from "../../src/icons.js";
import star from "../galery/star.png";

const Bests = (props) => {
  if (props.scrolll) {
    setTimeout(() => {
      const cardZoom = document.querySelectorAll(".cardZoom");
      const observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
          entry.target.classList.toggle(
            "animate-fadeInBigSmall",
            entry.isIntersecting
          );
        });
      });
      cardZoom.forEach((cr) => observer.observe(cr));
    }, 50);
  }

  return (
    <div id="bests" className=" group flex items-center justify-center flex-col m-3 cursor-pointer cardZoom">
      <div className=" relative ">
        <img
          className="w-6 h-6 z-50 absolute right-5 m-2 animate-ping group-hover:animate-spin"
          src={star}
          alt=""
        />
        <img
          className="w-6 h-6 z-50 absolute right-5 m-2 group-hover:hidden "
          src={star}
          alt=""
        />
        <div
          className="flex items-center justify-center"
          id="bestImg"
        >
          <div className="animate-pulse">{search}</div>
        </div>
        <img className=" w-32 mx-5 md:w-64" src={props.img} alt="" />
      </div>
      <h1 className=" text-center font-bold text-2xl md:text-3xl ">
        {props.header}
      </h1>
    </div>
  );
};

export default Bests;
