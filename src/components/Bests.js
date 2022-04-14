import React from "react";
import { search } from "../../src/icons.js";
import star from "../galery/star.png";

const Bests = (props) => {
  return (
    <div
      id="bests"
      className=" group flex items-center justify-center flex-col m-2 md:m-3 cursor-pointer  "
    >
      <div className=" relative ">
        <img
          className="w-4 h-4 z-50 absolute right-5 m-2 animate-ping group-hover:animate-spin"
          src={star}
          alt=""
        />
        <img
          className="w-4 h-4 z-50 absolute right-5 m-2 group-hover:hidden "
          src={star}
          alt=""
        />
        <div className="flex items-center justify-center" id="bestImg">
          <div className="animate-pulse">{search}</div>
        </div>
        <img className=" w-24 mx-5 md:w-64" src={props.img} alt="" />
      </div>
      <h1 className=" text-center font-bold text-2xl md:text-3xl ">
        {props.header}
      </h1>
    </div>
  );
};

export default Bests;
