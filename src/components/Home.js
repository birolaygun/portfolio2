import React from "react";
import { Link } from "react-router-dom";
import { home } from "../icons";

const Home = () => {
  return (
    <Link
      to="/"  
      className="absolute top-0 left-0 ml-2 mt-6 bg-black rounded-full w-10 h-10 flex items-center justify-center"
    >
      <button className="animate-pulse text-white">{home}</button>
    </Link>
  );
};

export default Home;
