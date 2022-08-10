import React from "react";
import { Home } from "@material-ui/icons";
const Footer = () => {
  return (
    <div className="w-full drop-shadow border absolute bottom-0">
      <div className=" p-2 flex justify-evenly ">
        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-sky-700">
          <Home />
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-sky-700">
          <Home />
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-sky-700">
          <Home />
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-sky-700">
          <Home />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
