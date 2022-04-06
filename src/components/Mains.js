import React from "react";

const Mains = () => {
  const [red, green, blue] = [69, 111, 225];

  window.addEventListener("scroll", () => {
    let y = 1 + (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
    document.querySelector(".p1").style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".p2").style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".p3").style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".p4").style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".p5").style.color = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".p6").style.color = `rgb(${r}, ${g}, ${b})`;
  });

  return (
    <div className="mains text-blue w-8 relative text-center flex items-center justify-center text-3xl md:text-6xl">
      <div className="absolute opacity-0 animate-show  ">
        {" "}
        <p className="p1 showText"> MERHABA </p>
      </div>
      <div className="  absolute opacity-0 animate-show animation-delay-11">
        {" "}
        <p className="p2 showText">
          {" "}
          Birol AYGÜN'ün <br /> "Portfolyo"suna <br /> Hoşgeldiniz{" "}
        </p>{" "}
      </div>
      <div className="  absolute opacity-0 animate-show animation-delay-12">
        {" "}
        <p className="p3 showText">
          {" "}
          FrontEnd <br /> Developer <br /> Olarak <br /> Bu Siteyi <br /> Kendim{" "}
          <br /> Tasarladım{" "}
        </p>{" "}
      </div>
      <div className=" absolute opacity-0 animate-show animation-delay-13">
        {" "}
        <p className="p4 showText">
          {" "}
          Portfolyomu <br /> Sizlere <br /> Sunmaktan <br /> Mutluluk <br />{" "}
          Duyarım{" "}
        </p>{" "}
      </div>
      <div className=" absolute opacity-0 animate-show animation-delay-14">
        {" "}
        <p className="p5 showText">
          {" "}
          Burada <br /> Hem Beni <br /> Tanıyacak...{" "}
        </p>{" "}
      </div>
      <div className=" absolute opacity-0 animate-show animation-delay-15">
        {" "}
        <p className="p6 showText">
          {" "}
          Hem de <br /> Neler <br /> Yapabildiğimi <br /> Göreceksiniz{" "}
        </p>{" "}
      </div>
    </div>
  );
};

export default Mains;
