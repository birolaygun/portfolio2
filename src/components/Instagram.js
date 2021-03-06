import React from "react";
import insta from "../../src/galery/instaOk.gif";
import whatapp from "../../src/galery/whatappOk.gif";
import portfolio from "../../src/galery/portfolioOk.gif";
import currency from "../../src/galery/currencyOk.gif";

const Instagram = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 flex flex-col justify-center items-center px-12 instagram">
      <header className="flex flex-col justify-center items-center p-6">
        <h1 className=" text-3xl font-bold">Instagram</h1>
        <h2>Clone</h2>
      </header>
      <img className="w-full max-w-xl" src={insta} alt="" />
      <div>
        <a href="https://insta-cloned.netlify.app/">
          <button className="bg-[#d40067] text-white rounded-md p-2 m-3 hover:shadow-lg instagram">
            Demo
          </button>
        </a>
        <a href="https://github.com/birolaygun/Instagram-Clone">
          {" "}
          <button className="bg-[#d40067] text-white rounded-md p-2 m-3 hover:shadow-lg instagram">
            Github
          </button>
        </a>
      </div>

      <p>
        I cloned Instagram by using{" "}
        <b>React, Next.Js, Recoil, Firebase, Google Authenticator, Tailwing</b>{" "}
        Of course not 100%, but the interface is exactly the same.
      </p>
      <br />
      <p>You can do;</p>
      <div>
        <ul className="list-disc p-5">
          <li className="fs-5 fw-bold mt-2">
            Signin with Google Authantication
          </li>
          <li className="fs-5 fw-bold">Add a photo</li>
          <li className="fs-5 fw-bold">Add a Comment</li>
          <li className="fs-5 fw-bold">Like</li>
        </ul>
      </div>
      <p>
        in this site. Since your transactions are kept with{" "}
        <b>Google Firebase </b> , they stay on the page permanently. It does not
        disappear even if you refresh the page.
      </p>

      <div className="m-5 w-full max-w-xl mb-10">
        <iframe
          className="w-full max-w-xl h-[40vW] max-h-80"
          src="https://www.youtube.com/embed/j7EQHJUIf5I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Instagram;
