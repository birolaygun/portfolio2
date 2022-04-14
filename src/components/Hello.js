import React, { useState } from "react";
import { download } from "../icons";
import ReactTypingEffect from "react-typing-effect";
import CVEn from "../galery/Birol_Aygun_CV_En.pdf";
import CVTr from "../galery/Birol_Aygun_CV.pdf";

const Hello = () => {
  const [disable, setDisable] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="bg-white rounded-md w-64 shadow-black shadow-md md:shadow-none md:bg-black flex flex-col ">
        <ReactTypingEffect
          speed={"100"}
          eraseSpeed={"100"}
          eraseDelay={"3000"}
          typingDelay={"1000"}
          className="font-bold w-full text-center my-2 md:my-9"
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
        <p className="  font-bold w-full text-center my-2 md:my-9">
          I'm Birol AYGÜN
        </p>
        <p className=" font-bold w-full text-center my-2 md:my-9">
          I'm Front End Developer
        </p>
      </div>
      <div className="relative flex items-center justify-between flex-col ">
        <button
          disabled={disable}
          onClick={() => {
            setDisable(true);

            setTimeout(() => {
              setDisable(false);
            }, 7500);
          }}
          className={` p-3 md:mt-24 mt-2  text-black 
      font-semibold rounded-md  hover:text-white  z-10
      shadow-black hover:shadow-white hover:shadow-button shadow-md md:shadow-none flex items-center space-x-3  ${
        disable ? "hover:bg-gray-300 bg-gray-300" : "bg-white hover:bg-black"
      }`}
        >
          <span>Download CV</span> <span>{download}</span>
        </button>
        <div className="flex items-center justify-between w-[250px]  absolute bottom-2 ">
          <a
            href={CVEn}
            download
            className={` bg-red-600 text-white rounded-full p-1 w-8 h-8 transition-transform flex justify-center ${
              !disable && "translate-x-16"
            } `}
          >
            EN
          </a>
          <a
            href={CVTr}
            download
            className={` bg-red-600 text-white rounded-full p-1 w-8 h-8 transition-transform flex justify-center ${
              !disable && " -translate-x-16"
            }`}
          >
            TR
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hello;
