import React from "react";
import { search } from "../../src/icons.js";

const Bests = (props) => {
  return (
    <div className="group flex items-center justify-center flex-col m-3">
      <div className=" relative ">
        <div
          className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition ease-in-out   "
          id="bestImg"
        >
          <div className="animate-pulse">{search}</div>
        </div>
        <img className=" w-32 mx-5 md:w-64" src={props.img} alt="" />
      </div>
      <h1 className=" text-center font-bold text-3xl ">{props.header}</h1>
    </div>
  );
};

export default Bests;
