import { useEffect, useRef, useState } from "react";
import { peace, github, linkedIn } from "./icons.js";
import { FullPage, Slide } from "react-full-page";
import Photo from "./components/Photo";
import insta from "./galery/instaOk.gif";
import whatapp from "./galery/whatappOk.gif";
import portfolio from "./galery/portfolioOk.gif";
import currency from "./galery/currencyOk.gif";
import Hello from "./components/Hello";
import Intro from "./components/Intro";
import Bests from "./components/Bests.js";

function App() {
  const [githubVisible, setGithubVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [scrolll, setScrolll] = useState(false);
  const [firstIVisible, setFirstIVisible] = useState(false);
  const [secondIVisible, setSeconIVisible] = useState(false);
  const [thirdIVisible, setThirdIVisible] = useState(false);
  const [fourdIVisible, setFourdIVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [blocksVisible, setBlocksVisible] = useState(false);

  setTimeout(() => {
    setHomeVisible(true);
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
                    setBlocksVisible(true);
                    setTimeout(() => {
                      setScrolll(true);
                      document.querySelector(
                        ".full-page-controls"
                      ).style.opacity = "1";
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

  window.addEventListener("scroll", () => {
    let opacity = window.window.scrollY / window.innerHeight;
    if (opacity > 1) {
      document.getElementById("firsBlock").style.opacity = Math.abs(0);
      document.getElementById("secondBlock").style.opacity = Math.abs(0);
    }

    document.getElementById("firsBlock").style.opacity = Math.abs(opacity - 1);
    document.getElementById("secondBlock").style.opacity = Math.abs(
      opacity - 1
    );

    if (opacity > 2) {
      document.getElementById("secondSlide").style.opacity = Math.abs(0);
    }
    document.getElementById("secondSlide").style.opacity = Math.abs(
      opacity - 2
    );
  });

  if (scrolll) {
    setTimeout(() => {
      const cardFadeIn = document.querySelectorAll(".cardFadeIn");
      const observer = new IntersectionObserver((e) => {
        e.forEach((entry) => {
          entry.target.classList.toggle("animate-fadeIn", entry.isIntersecting);
        });
      });
      cardFadeIn.forEach((cr) => observer.observe(cr));

      const cardFromLeft = document.querySelectorAll(".cardFromLeft");
      const observerr = new IntersectionObserver((e) => {
        e.forEach((entry) => {
          entry.target.classList.toggle(
            "animate-fromLeft",
            entry.isIntersecting
          );
        });
      });
      cardFromLeft.forEach((cr) => observerr.observe(cr));

      const cardFromRight = document.querySelectorAll(".cardFromRight");
      const observerl = new IntersectionObserver((e) => {
        e.forEach((entry) => {
          entry.target.classList.toggle(
            "animate-fromRight",
            entry.isIntersecting
          );
        });
      });
      cardFromRight.forEach((cr) => observerl.observe(cr));
    }, 50);
  }

  return (
    <div className="App scroll-m-96">
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
      <FullPage
        controls
        beforeChange={(e) => {
          if (document.querySelector(".full-page-controls button")) {
            let all = document.querySelectorAll(".full-page-controls button");

            for (var x = 0; x < all.length; x++) {
              all[x].style.backgroundColor = "transparent";
            }
          }
        }}
        afterChange={(e) => {
          if (document.querySelector(".full-page-controls button")) {
            document.querySelector(
              ".full-page-controls button:nth-child(" + (e.to + 2) + ")"
            ).style.backgroundColor = "rgb(228, 228, 228)";
          }
        }}
      >
        {/* first */}
        <Slide>
          <div className="w-screen h-screen flex bg-bg-100 relative">
            <div
              id="firsBlock"
              className=" bg-white w-1/2 h-screen flex flex-col items-center justify-center "
            >
              <div
                className={`hidden md:block w-1/2 max-w-xs ${
                  !blocksVisible && "invisible"
                } animate-fadeIn animation-delay-4800`}
              >
                <Photo />
              </div>
            </div>

            <div
              id="secondBlock"
              className=" bg-black w-1/2 h-screen flex flex-col items-center justify-center"
            >
              <div className="w-1/2 max-w-xs flex flex-col items-center justify-center text-white ">
                <div
                  className={`hidden md:block ${
                    !blocksVisible && "invisible"
                  } animate-fadeIn animation-delay-4800`}
                >
                  <Hello />
                </div>
              </div>{" "}
            </div>
            <div className="absolute  w-0 h-screen left-1/2 flex justify-center animate-fadeInDown  z-10 ">
              <p className="rounded-full absolute rotate-180 p-1 bg-white">
                {peace}
              </p>

              <div className="flex absolute top-0 w-screen font-bold mt-2 -z-10">
                <div
                  className={`flex-grow animation-delay-3000 animate-fromRight text-right w-1/2 ${
                    !homeVisible && "invisible"
                  } `}
                >
                  Peace is happiness
                </div>
                <div className="w-20 "></div>
                <div
                  className={` flex-grow animation-delay-3000 animate-fromLeft text-white w-1/2  ${
                    !homeVisible && "invisible"
                  }`}
                >
                  without all it
                </div>
              </div>
            </div>

            <div
              className="w-full right- h-full absolute  md:hidden flex flex-col 
            justify-center items-center "
            >
              <div className="flex flex-col justify-center items-center">
                <div
                  className={`${
                    !blocksVisible && "invisible"
                  } animate-fadeIn animation-delay-4800`}
                >
                  <Hello />
                </div>

                <div
                  className={` w-1/2 max-w-xs ${
                    !blocksVisible && "invisible"
                  } animate-fadeIn animation-delay-4800`}
                >
                  <Photo />
                </div>
              </div>
            </div>
          </div>
        </Slide>
        {/* second */}
        {scrolll && (
          <Slide className=" w-full h-full bg-orange-500 ">
            <div
              id="secondSlide"
              className="secondSlide w-full h-full bg-bg-100 px-10"
            >
              <header>
                <h1 className="h-1/6 cardFadeIn text-center font-bold p-5 pb-2 text-white text-3xl">
                  About Me
                </h1>
                <h2 className="cardFadeIn text-center font-bold  text-gray-300 text-sm">
                  my introduction
                </h2>
              </header>
              <div className="h-5/6 flex flex-col md:flex-row justify-center">
                <div className="  self-start cardFromLeft w-full md:w-1/2 p-4">
                  {" "}
                  <Intro />{" "}
                </div>

                <div className="self-center w-full md:w-1/2 p-4">
                  <div className="computer cardFromRight ">
                    <div>
                      <label>HTML 5</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="90"
                          disabled
                        ></input>
                        <span>90%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>CSS 3</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="80"
                          disabled
                        ></input>
                        <span>80%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>SCSS</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="90"
                          disabled
                        ></input>
                        <span>90%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>BootStrap</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="70"
                          disabled
                        ></input>
                        <span>70%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>TailWind</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="70"
                          disabled
                        ></input>
                        <span>70%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>JavaScript</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="80"
                          disabled
                        ></input>
                        <span>80%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>TypeScript</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="60"
                          disabled
                        ></input>
                        <span>60%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>React</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="80"
                          disabled
                        ></input>
                        <span>80%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>Next.js</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="70"
                          disabled
                        ></input>
                        <span>70%</span>
                      </div>{" "}
                    </div>

                    <div>
                      <label>Redux</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="80"
                          disabled
                        ></input>
                        <span>80%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>Recoil</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="80"
                          disabled
                        ></input>
                        <span>80%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>FireBase</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="40"
                          disabled
                        ></input>
                        <span>40%</span>
                      </div>{" "}
                    </div>
                    <div>
                      <label>Git</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="60"
                          disabled
                        ></input>
                        <span>60%</span>
                      </div>{" "}
                    </div>

                    <div className=" invisible h-0 md:visible md:h-auto ">
                      <label>Adobe Photoshop</label>{" "}
                      <div className="flex items-center space-x-2">
                        <input
                          className="w-28 lg:w-64"
                          type="range"
                          value="60"
                          disabled
                        ></input>
                        <span>60%</span>
                      </div>{" "}
                    </div>
                    <div className=" invisible h-0 md:visible md:h-auto ">
                      <label>Microsoft Office</label>{" "}
                      <div className="flex items-center space-x-2 ">
                        <input
                          className="w-28 lg:w-64 "
                          type="range"
                          value="70"
                          disabled
                        ></input>
                        <span>70%</span>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        )}
        {/* third */}
        {scrolll && (
          <Slide className=" w-full h-full bg-green-600 ">
            <div
              id="thirdSlide"
              className="thirdSlide w-full h-full bg-orange-500 px-10"
            >
              <header>
                <h1 className="h-1/6 cardFadeIn text-center font-bold p-5 pb-2 text-black text-3xl">
                  My Projects
                </h1>
                <h2 className="cardFadeIn text-center font-bold  text-gray-800 ">
                  the bests
                </h2>
              </header>
              <div className="h-5/6 flex flex-col md:flex-row justify-center ">
                <div className="flex flex-col justify-center items-center">
                  <Bests img={insta} header="İnstagram" />
                  <Bests img={whatapp} header="WhatsApp" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Bests img={currency} header="Currency" />
                  <Bests img={portfolio} header="Portfolio" />
                </div>
              </div>
            </div>
          </Slide>
        )}
        {/* fourd */}
        {scrolll && (
          <Slide>
            <div
              id="secondSlide"
              className="secondSlide w-full h-full bg-green-400"
            >
              <br />
              <div className="cardFadeIn h-20 bg-white w-40 m-6 ml-16 ">
                Welcome to <strong>The Box!</strong>
              </div>

              <div className="cardFromLeft h-20 bg-white w-40 m-6 ml-16 ">
                Welcome to <strong>The Box!</strong>
              </div>

              <div className="cardFromLeft h-20 bg-white w-40 m-6 ml-16 ">
                Welcome to <strong>The Box!</strong>
              </div>

              <div className="cardFromRight h-20 bg-white w-40 m-6 ml-16 ">
                Welcome to <strong>The Box!</strong>
              </div>
            </div>
          </Slide>
        )}
      </FullPage>
    </div>
  );
}

export default App;
