import React from "react";

const Hello = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-2 md:shadow-none md:bg-black">
        <p className=" py-9 font-bold w-full text-center ">Hello..</p>
        <p className=" md:py-7 font-bold w-full text-center ">
          I'm Birol AYGÜN
        </p>
        <p className=" py-9 font-bold w-full text-center ">
          I'm Front End Developer
        </p>
      </div>
      <button
        className="p-3 md:mt-24 mt-2 bg-white text-black 
      font-semibold rounded-md hover:bg-black hover:text-white shadow-black hover:shadow-white hover:shadow-button shadow-md md:shadow-none"
      >
        Download CV
      </button>
    </div>
  );
};

export default Hello;
