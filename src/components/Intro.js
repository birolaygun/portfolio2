import React from "react";
let start = new Date(2021, 2, 20, 10, 33, 30, 0);
let result = Math.floor((new Date() - start) / (1000 * 60 * 60 * 24 * 30));
const Intro = () => {
  return (
    <div>
      <p className="text-gray-300 font-semibold text-sm md:text-base">
        I started learning software {result} months ago. I didn't know anything
        about it but I was interested. I learned with udemy
        courses and different resources on the internet and I'm still learning.
      </p>

      <div className="flex items-start justify-between mt-2 md:mt-9 space-x-1">
        <div className="flex flex-col items-center justify-between bg-bg-150 w-24 md:p-3 rounded-lg">
          <div className="font-bold text-2xl text-black">01+</div>
          <p className="text-center text-gray-700">
            Year <br /> Experiance
          </p>
        </div>
        <div className="flex flex-col items-center justify-between bg-bg-150 w-24 md:p-3 rounded-lg">
          <div className="font-bold text-2xl text-black">01</div>
          <p className="text-center text-gray-700">
            Proffessional <br /> Project
          </p>
        </div>
        <div className="flex flex-col items-center justify-between bg-bg-150 w-24 md:p-3 rounded-lg">
          <div className="font-bold text-2xl text-black">25+</div>
          <p className="text-center text-gray-700">
            Github <br /> Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
