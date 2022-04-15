import React from "react";
import insta from "../../src/galery/instaOk.gif";
import whatapp from "../../src/galery/whatappOk.gif";
import portfolio from "../../src/galery/portfolioOk.gif";
import currency from "../../src/galery/currencyOk.gif";

const Portfolio = () => {
  return (
    <div
      id="secondSlide"
      className="bg-bg-100 min-h-screen text-gray-100 flex flex-col justify-center items-center px-12"
    >
      <header className="flex flex-col justify-center items-center p-6">
        <h1 className=" text-3xl font-bold">Portfolio</h1>
      </header>
      <img className="w-full max-w-xl" src={portfolio} alt="" />
      <div>
        <a href="https://birolaygun.netlify.app/">
          <button className="bg-black text-white font-semibold rounded-md p-2 m-3 hover:shadow-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/birolaygun/portfolio2">
          {" "}
          <button className="bg-black text-white font-semibold rounded-md p-2 m-3 hover:shadow-lg">
            Github
          </button>
        </a>
      </div>

      <p>Actually you are right here right now. </p>
      <br />
      <ul>
        {" "}
        <li>I used: </li>
        <br />
        <li>React.js</li>
        <li>Tailwind.css</li>
        <li>React-fullpage Library</li>
        <li>Emailjs-com Library</li>
        <li>React-typing-effect Library </li>
        <br />
        <li>in this website</li>
      </ul>
    </div>
  );
};

export default Portfolio;
