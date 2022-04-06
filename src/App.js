import { useEffect, useRef, useState } from "react";
import { peace, github, linkedIn } from "./icons.js";
import { FullPage, Slide } from "react-full-page";
import myPhoto from "../src/galery/Brl_Web.gif";
import Photo from "./components/Photo";
import Hello from "./components/Hello";

function App() {
  const [githubVisible, setGithubVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [firstIVisible, setFirstIVisible] = useState(false);
  const [secondIVisible, setSeconIVisible] = useState(false);
  const [thirdIVisible, setThirdIVisible] = useState(false);
  const [fourdIVisible, setFourdIVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [blocksVisible, setBlocksVisible] = useState(false);

  setTimeout(() => {
    setHomeVisible(true);
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
                }, 500);
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 800);
  }, 3050);

  //bg color

  window.addEventListener("scroll", () => {
    let opacity = window.window.scrollY / window.innerHeight;
    if (opacity > 1) {
      opacity = 1;
    }
    document.getElementById("firsBlock").style.opacity = Math.abs(opacity - 1);
    document.getElementById("secondBlock").style.opacity = Math.abs(
      opacity - 1
    );
  });

  return (
    <div className="App scroll-m-96">
      <FullPage controls>
        <Slide>
          <div className="w-screen h-screen flex bg-orange-600 relative">
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
              <div className="z-20 flex flex-col items-center justify-center absolute text-white  space-y-3 right-4 bottom-1/4">
                <div
                  className={`animate-fromRight animation-delay-3800 border-r-2 w-1 h-8 ${
                    !firstIVisible && "invisible"
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
                  Peace at home
                </div>
                <div className="w-20 "></div>
                <div
                  className={` flex-grow animation-delay-3000 animate-fromLeft text-white w-1/2  ${
                    !homeVisible && "invisible"
                  }`}
                >
                  Peace in the World
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
        <Slide>
          <div id="secondSlide" className="secondSlide w-full h-full bg-bg-100"></div>
          
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
