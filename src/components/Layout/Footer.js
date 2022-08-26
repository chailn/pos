import React from "react";
import {footer} from '../../data'

const Footer = () => {
  return (
    <div className="w-full drop-shadow border bg-white absolute bottom-0 left-0 right-0 z-10">
      <div className=" p-2 flex justify-evenly ">
        {footer.item.map((item,index) => {
          const {icon,value} = item;
          return (
            <div key={index} className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-sky-700">
             {icon}
            <p>{value}</p>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Footer;
