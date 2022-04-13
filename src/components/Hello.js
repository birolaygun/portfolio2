import React, { useState } from "react";
import { download } from "../icons";
import ReactTypingEffect from "react-typing-effect";

const Hello = (props) => {
  const [dropDown, setDropDown] = useState(false);

  if (props.scrolll) {
    setTimeout(() => {
      const cardFadeIn = document.querySelectorAll(".cardFadeIn");
      const observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
          entry.target.classList.toggle("animate-fadeIn", entry.isIntersecting);
        });
      });
      cardFadeIn.forEach((cr) => observer.observe(cr));
    }, 50);
  }

  return (
    <div className="cardFadeIn flex flex-col items-center justify-center ">
      <div className="bg-white rounded-md w-64 shadow-black  shadow-md md:shadow-none md:bg-black flex flex-col ">
        <ReactTypingEffect
          speed={"100"}
          eraseSpeed={"100"}
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
        <p className="cardFadeIn md:py-8 font-bold w-full text-center ">
          I'm Birol AYGÜN
        </p>
        <p className="cardFadeIn py-9 font-bold w-full text-center ">
          I'm Front End Developer
        </p>
      </div>
      <div className="relative">
        <button
          onClick={() => {
            setDropDown(true);
          }}
          className="cardFadeIn p-3 md:mt-24 mt-2 bg-white text-black 
      font-semibold rounded-md hover:bg-black hover:text-white 
      shadow-black hover:shadow-white hover:shadow-button shadow-md md:shadow-none flex items-center space-x-3"
        >
          <span>Download CV</span> <span>{download}</span>
        </button>
        <div
          className={`dropdown bg-white p-3 m-2 absolute z-50 shadow-md shadow-black rounded-md w-72 -left-20 text-black transition-all ease-in-out ${
            dropDown ? "" : "-bottom-10 opacity-0 h-0"
          } `}
        >
          <p className="font-semibold">Which language do you prefer ?</p>
          <div className="flex justify-between">
            <button className="bg-red-600 text-white p-1 rounded-md my-3 font-bold">
              English
            </button>
            <button className="bg-red-600 text-white p-1 rounded-md my-3 font-bold">
              Turkish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
