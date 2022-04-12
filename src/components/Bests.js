import React from "react";

const Bests = (props) => {
  return (
    <div
      id="bestImg"
      className=" flex items-center justify-center flex-col m-3"
    >
      <img className="w-32 mx-5 md:w-64" src={props.img} alt="" />
      <h1 className=" text-center font-bold text-3xl ">{props.header}</h1>
    </div>
  );
};

export default Bests;
