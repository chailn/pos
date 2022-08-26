import React from "react";
import { Link } from "react-router-dom";
import {loading} from '../../data'

const Loading = () => {
  const {img} = loading;
  return (
    <Link to="/Admin">
      <div className="w-full h-screen flex flex-col items-center justify-center text-center ">
        <img src={img.type} alt=""/>
      </div>
    </Link>
  );
};

export default Loading;
