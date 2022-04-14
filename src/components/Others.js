import React from "react";

const Others = (props) => {
  return (
    <div className="group relative w-1/3 min-w-[200px] flex items-center justify-center  ">
      <div
        id="others"
        className="w-3/5 h-1 bg-transparent absolute bottom-3  
        group-hover:animate-scaleXSpread group-hover:bg-orange-400 "
      ></div>
      {props.icon && (
        <div className="absolute right-0 top-12 w-1/3 min-w-[200px]">
          <img
            className="w-7 h-7 absolute right-0 -top-12 animate-pulse group-hover:animate-ping"
            src={props.icon}
            alt=""
          />
          <img
            className="w-7 h-7 absolute right-0 -top-12 hidden  group-hover:block "
            src={props.icon}
            alt=""
          />
        </div>
      )}{" "}
      <a className="w-full" target="_blank" href={props.link}>
        <div
          className=" bg-green-900 bg-opacity-40 text-white font-semibold w-full text-center
      my-1 py-2 rounded-full border border-white "
        >
          {" "}
          {props.name}
        </div>
      </a>
    </div>
  );
};

export default Others;
