import { useEffect, useRef, useState } from "react";
import Mains from "./Mains";
import { peace } from "./icons.js";
import { FullPage, Slide } from "react-full-page";

function App() {
  const [githubVisible, setGithubVisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [worldVisible, setWorldVisible] = useState(false);

  setTimeout(() => {
    setHomeVisible(true);
    setTimeout(() => {
      setWorldVisible(true);
    }, 1000);
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
      <div className="flex flex-col items-center justify-center absolute top-0 left-0">
        <div className="w-7">
          <a
            className={`animate-fadeInBigSmall absolute animation-delay-5100  ${
              !inVisible && "invisible"
            }`}
            href="https://www.linkedin.com/in/birol-ayg%C3%BCn-89a346222"
          >
            <i className="fab fa-2x fa-linkedin-in"></i>{" "}
          </a>
        </div>
        <div>
          <a
            className={`animate-fadeInBigSmall absolute animation-delay-5500  ${
              !githubVisible && "invisible"
            }`}
            href="https://github.com/birolaygun"
          >
            <i className="fab fa-2x fa-github"></i>{" "}
          </a>
        </div>
      </div>

      <FullPage>
        <Slide>
          <div className="w-screen h-screen flex bg-orange-600 relative">
            <div id="firsBlock" className=" bg-white w-1/2 h-screen "></div>
            <div id="secondBlock" className=" bg-black w-1/2 h-screen "></div>

            <div className="absolute  w-0 h-screen left-1/2 flex justify-center animate-fadeInDown ">
              <p className="rounded-full absolute rotate-180 p-1 bg-white">
                {peace}
              </p>
            </div>
            <div className="flex absolute top-0 w-screen font-bold mt-2">
              <div
                className={`flex-grow text-right w-1/2 ${
                  !homeVisible && "invisible"
                } `}
              >
                Peace at home
              </div>
              <div className="w-20 "></div>
              <div
                className={` flex-grow text-white w-1/2 ${
                  !worldVisible && "invisible"
                }`}
              >
                Peace in the World
              </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <h1>Another slide content</h1>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
