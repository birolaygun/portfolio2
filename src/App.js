import { useEffect, useRef, useState } from "react";
import Mains from "./Mains";
import ReactPageScroller from 'react-page-scroller';

function App() {
  const [red, green, blue] = [69, 111, 225];

  //bg color

  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    document.getElementById(
      "firsBlock"
    ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  return (
    <div className="App ">
      <button className=" right-0 z-[51] fixed" onClick={() => {}}>
        btn
      </button>
      <nav className={`fixed bg-white w-screen h-24 z-50`}>nav here</nav>{" "}

          <div
            id="firsBlock"
            className={`w-screen h-screen bg-blue flex items-center justify-center text-2xl font-extrabold`}
          >
            <Mains />
          </div>
       
    </div>
  );
}

export default App;
