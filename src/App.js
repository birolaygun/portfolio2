import { useEffect, useRef, useState } from "react";
import Mains from "./Mains";
import { peace } from "./icons.js";
import { FullPage, Slide } from "react-full-page";

function App() {
  const [navVisible, setNavVisible] = useState(false);
  const [rVisible, setRVisible] = useState(false);
  const [bVisible, setBVisible] = useState(false);
  const [lVisible, setLVisible] = useState(false);
  const [githubVisible, setGithubVisible] = useState(false);
  const [youtubeVisible, setYoutubeVisible] = useState(false);
  const [instaVisible, setInstaVisible] = useState(false);
  const [twitterVisible, setLTwitterisible] = useState(false);
  const [inVisible, setInVisible] = useState(false);

  setTimeout(() => {
    setNavVisible(true);
    setTimeout(() => {
      setBVisible(true);
      setTimeout(() => {
        setRVisible(true);
        setTimeout(() => {
          setLVisible(true);
          setTimeout(() => {
            setInVisible(true);
            setTimeout(() => {
              setLTwitterisible(true);
              setTimeout(() => {
                setInstaVisible(true);
                setTimeout(() => {
                  setYoutubeVisible(true);
                  setTimeout(() => {
                    setGithubVisible(true);
                  }, 100);
                }, 100);
              }, 100);
            }, 100);
          }, 300);
        }, 300);
      }, 300);
    }, 1300);
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
      <nav
        className={`fixed top-0 w-screen h-20 bg-white shadow-md z-50 animate-fadeInShadow animation-delay-3000 flex items-center justify-between px-5 ${
          !navVisible && "invisible"
        } `}
      >
        <div className="font- text-3xl font-extrabold drop-shadow-3xl text-white relative mb-9 cursor-pointer">
          <span
            className={` ${
              !bVisible && "invisible"
            } animate-fadeInFromLeft absolute animation-delay-4300 z-[54]`}
          >
            B
          </span>
          <span
            className={` ${
              !rVisible && "invisible"
            } animate-fadeInFromLeft absolute left-5 animation-delay-4600 z-[53]`}
          >
            R
          </span>
          <span
            className={` ${
              !lVisible && "invisible"
            } animate-fadeInFromLeft absolute left-10 animation-delay-4900 z-[52]`}
          >
            L
          </span>
        </div>
        <div className="space-x-4 flex mb-7">
          <div className="w-7">
            <a
              className={`animate-fadeInDown absolute animation-delay-5100  ${
                !inVisible && "invisible"
              }`}
              href="https://www.linkedin.com/in/birol-ayg%C3%BCn-89a346222"
            >
              <i className="fab fa-2x fa-linkedin-in"></i>{" "}
            </a>
          </div>
          <div className="w-7">
            <a
              className={`animate-fadeInDown absolute animation-delay-5200 ${
                !twitterVisible && "invisible"
              }`}
              href="https://twitter.com/BirolAygun2?t=gTKDKjr6X27lBL-L9pWHKA&s=09"
            >
              <i className="fab fa-2x fa-twitter"></i>
            </a>
          </div>
          <div className="w-7">
            <a
              className={`animate-fadeInDown absolute animation-delay-5300 ${
                !instaVisible && "invisible"
              }`}
              href="https://instagram.com/birolaygun2?utm_medium=copy_link"
            >
              <i className="fab fa-2x fa-instagram"></i>
            </a>
          </div>
          <div className="w-8">
            <a
              className={`animate-fadeInDown absolute animation-delay-5400 ${
                !youtubeVisible && "invisible"
              }`}
              href="https://www.youtube.com/channel/UCRnkf1wfBNBPRm7NoSf4PoA"
            >
              <i className="fab fa-youtube fa-2x"></i>{" "}
            </a>
          </div>
          <div className="w-7">
            <a
              className={`animate-fadeInDown absolute animation-delay-5500  ${
                !githubVisible && "invisible"
              }`}
              href="https://github.com/birolaygun"
            >
              <i className="fab fa-2x fa-github"></i>{" "}
            </a>
          </div>
        </div>
      </nav>

      <FullPage>
        <Slide>
          <div className="w-screen h-screen flex bg-orange-600 relative">
            <div id="firsBlock" className=" bg-white w-1/2 h-screen "></div>
            <div id="secondBlock" className=" bg-black w-1/2 h-screen "></div>

            <div className="absolute  w-0 h-screen left-1/2 flex justify-center animate-fadeInDown ">
              <p className="rounded-full absolute  p-1 bg-white">{peace}</p>
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
