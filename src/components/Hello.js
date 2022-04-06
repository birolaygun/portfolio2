import React from "react";
import { download } from "../icons";
import ReactTypingEffect from "react-typing-effect";

const Hello = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-md px-4 shadow-black  shadow-md md:shadow-none md:bg-black flex flex-col ">
        <ReactTypingEffect
          speed={"150"}
          eraseSpeed={"150"}
          eraseDelay={"3000"}
          typingDelay={"1000"}
          className="py-9 font-bold w-full text-center"
          text={["Hello...", "Welcome to my portfolio"]}
          cursorRenderer={(cursor) => <h1>{cursor}</h1>}
          displayTextRenderer={(text, i) => {
            return (
              <h1 className="">
                {text.split("").map((char, i) => {
                  const key = `${i}`;
                  return <span key={key}>{char}</span>;
                })}
              </h1>
            );
          }}
        />
        <p className=" md:py-8 font-bold w-full text-center ">
          I'm Birol AYGÜN
        </p>
        <p className=" py-9 font-bold w-full text-center ">
          I'm Front End Developer
        </p>
      </div>
      <button
        className="p-3 md:mt-24 mt-2 bg-white text-black 
      font-semibold rounded-md hover:bg-black hover:text-white 
      shadow-black hover:shadow-white hover:shadow-button shadow-md md:shadow-none flex items-center space-x-3"
      >
        <span>Download CV</span> <span>{download}</span>
      </button>
    </div>
  );
};

export default Hello;
