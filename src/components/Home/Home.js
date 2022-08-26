
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import {home} from '../../data'

const Home = () => {
  const {title, content, list} = home;

  return (
    <div className="font-['Noto Sans TC']">
      <div className="w-full bg-white  text-center drop-shadow">
        <h1 className="text-2xl text-gray-700 font-medium py-2">{title}</h1>
      </div>
      <div className="bg-[#E5E5E5] h-screen">
        <h1 className="text-2xl text-gray-700 font-medium p-4">{content}</h1>
        <div className="grid grid-cols-3 pl-4 pr-4 gap-4">
          {list.map((item, index) => {
            const { link,icon,className,value} = item;
            return (
              <Link to={link} key={index} className="p-4 flex-col items-center bg-white border border-gary-300 rounded-xl text-center justify-center ">
                  <div className={className}>
                    {icon}
                  </div>
                   <p className="text-gray-600">{value}</p>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
