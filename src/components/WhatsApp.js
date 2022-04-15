import React from "react";
import whatapp from "../../src/galery/whatappOk.gif";

const WhatsApp = () => {
  return (
    <div className="bg-[#111b21] min-h-screen text-gray-100 flex flex-col justify-center items-center px-12">
      <header className="flex flex-col justify-center items-center p-6">
        <h1 className=" text-3xl font-bold">WhatsApp</h1>
        <h2>Clone</h2>
      </header>
      <img className="w-full max-w-xl" src={whatapp} alt="" />
      <div>
        <a href="https://whatsapq.netlify.app/">
          <button className="bg-[#00ac83] text-black rounded-md p-2 m-3 hover:shadow-lg">
            Demo
          </button>
        </a>
        <a href="https://github.com/birolaygun/WhatsApp">
          {" "}
          <button className="bg-[#00ac83] text-black rounded-md p-2 m-3 hover:shadow-lg">
            Github
          </button>
        </a>
      </div>

      <p>
        I develop this project by using{" "}
        <b>Next.js, TailWind, Redux and fireStore, Google Authenticator</b>{" "}
        Interface is exactly the same.
      </p>
      <br />
      <p>You can do;</p>
      <div>
        <ul className="list-disc p-5">
          <li>Enter with Google Authantication</li>
          <li>Add a person by e-mail adres to messaging</li>
          <li>Then start messaging like WhatsApp App</li>
          <li>You can send music, video, photo and file</li>
        </ul>
      </div>
      <p>
        If you want to send a message to me, please add me.
        "birolaygun.bilisim@gmail.com"
      </p>

      <div className="m-5 w-full max-w-xl mb-10">
        <iframe
          className="w-full max-w-xl h-[40vW] max-h-80"
          src="https://www.youtube.com/embed/0mjj1NJdTb0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WhatsApp;
