import React, { useState } from "react";
import { github, linkedIn } from "../../src/icons.js";

const Links = () => {
  const [githubVisible, setGithubVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [firstIVisible, setFirstIVisible] = useState(false);
  const [secondIVisible, setSeconIVisible] = useState(false);
  const [thirdIVisible, setThirdIVisible] = useState(false);
  const [fourdIVisible, setFourdIVisible] = useState(false);
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setFirstIVisible(true);
        setTimeout(() => {
          setInVisible(true);
          setTimeout(() => {
            setGithubVisible(true);
            setTimeout(() => {
              setSeconIVisible(true);
              setTimeout(() => {
                setThirdIVisible(true);
                setTimeout(() => {
                  setFourdIVisible(true);
                  setTimeout(() => {
                    setTimeout(() => {
                      if (document.querySelector(".full-page-controls")) {
                        document.querySelector(
                          ".full-page-controls"
                        ).style.opacity = "1";
                      }
                    }, 1000);
                  }, 500);
                }, 100);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 200);
    }, 600);
  }, 3060);

  return (
    <div
      className={`z-50 flex flex-col items-center justify-center fixed text-white  space-y-3 right-1 top-1/2 bg-black p-3 py-7 rounded-full ${
        !firstIVisible && "opacity-0"
      }`}
    >
      <div
        className={`animate-fromRight animation-delay-3800 border-r-2 w-1 h-8 ${
          !firstIVisible && "opacity-0"
        }`}
      ></div>
      <div
        className={`pt-3 animate-fromRight animation-delay-3900 ${
          !inVisible && "invisible"
        }`}
      >
        <a
          className={`   `}
          href="https://www.linkedin.com/in/birol-ayg%C3%BCn-89a346222"
        >
          {linkedIn}{" "}
        </a>
      </div>
      <div
        className={`pb-3 animate-fromRight animation-delay-4000  ${
          !githubVisible && "invisible"
        }`}
      >
        <a href="https://github.com/birolaygun">{github}</a>
      </div>

      <div
        className={` animate-fromRight animation-delay-4100 w-2 h-2 rounded-full bg-white  ${
          !secondIVisible && "invisible"
        }`}
      ></div>

      <div
        className={` animate-fromRight animation-delay-4200 w-1 h-1 rounded-full bg-white  ${
          !thirdIVisible && "invisible"
        }`}
      ></div>

      <div
        className={` animate-fromRight animation-delay-4300 -top-1 relative w-1 h-4  ${
          !fourdIVisible && "invisible"
        }`}
      >
        |
      </div>
    </div>
  );
};

export default Links;
