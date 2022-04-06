import React from "react";
import myPhoto from "../../src/galery/Brl_Web.gif";
import { contact } from "../icons";

const Photo = () => {
  return (
    <div className=" max-w-xs flex flex-col items-center justify-center">
      <div className=" rounded-lg mt-7 md:mt-0 ">
        <img className="rounded-lg" src={myPhoto} alt="" />
      </div>{" "}
      <p
        className=" w-full text-center m-2 p-1 font-bold bg-white rounded
          -md shadow-black  shadow-md md:shadow-none md:bg-white"
      >
        Do you want to work with me ?
      </p>
      <button
        className="p-3 mt-2 bg-black text-white 
      font-semibold rounded-md hover:bg-white hover:text-black shadow-white hover:shadow-black
       hover:shadow-button shadow-md md:shadow-none flex items-center space-x-3"
      >
        <span>Contact</span> <span> {contact}</span>
      </button>
    </div>
  );
};

export default Photo;
