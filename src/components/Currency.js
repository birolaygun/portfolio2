import React from "react";
import insta from "../../src/galery/instaOk.gif";
import whatapp from "../../src/galery/whatappOk.gif";
import portfolio from "../../src/galery/portfolioOk.gif";
import currency from "../../src/galery/currencyOk.gif";

const Currency = () => {
  return (
    <div className="bg-[#111b21] min-h-screen text-gray-100 flex flex-col justify-center items-center px-12 currenn">
      <header className="flex flex-col justify-center items-center p-6">
        <h1 className=" text-3xl font-bold">Currency</h1>
      </header>
      <img className="w-full max-w-xl" src={currency} alt="" />
      <div>
        <a href="https://currency-convert-now.netlify.app/">
          <button className="bg-[#001991] text-white rounded-md p-2 m-3 hover:shadow-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/birolaygun/CurrencyConvert">
          {" "}
          <button className="bg-[#001991] text-white rounded-md p-2 m-3 hover:shadow-lg">
            Github
          </button>
        </a>
      </div>

      <p>It's my first professional website. </p>
      <br />
      <div>
        <ul className="list-disc p-5">
          <li>More than 200 currencies</li>
          <li>
            It allows you to make calculations on all exchange rates instantly
            with up-to-date data
          </li>
          <li>
            With the line chart, you can see the exchange rate values from 2020
          </li>
          <li>
            You can access the statistical information of the last 30 and the
            last 90 days
          </li>
          <li>Giving depreciation and value increase proportionally </li>
        </ul>
      </div>
      <p>
          This site, which I prepared using Next and Tailwind, has a perfectly
          responsive look. In particular, the Line Chart I got from amChart library
          was highly appreciated.
        </p>

      <div className="m-5 w-full max-w-xl mb-10">
        <iframe
          className="w-full max-w-xl h-[40vW] max-h-80"
          src="https://www.youtube.com/embed/toFKMKH6QG0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Currency;
