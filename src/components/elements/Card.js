import React from "react";

const Card = ({ imageText, h1Text, bgImage, textColor }) => {
  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 backdrop-blur-lg">
      <div className={`${bgImage} w-full h-5/6 bg-cover bg-center`}>
        <h1
          className={`absolute left-2/4 top-1/2 translate ${textColor} uppercase -translate-x-1/2 -translate-y-1/2 text-2x1 text-white bg-black/30 border-4 border-white p-2`}
        >
          {imageText}
        </h1>
      </div>
      <div className="m-2 lg:m-4">
        <h1 className="uppercase text-black font-bold">{h1Text}</h1>
      </div>
    </div>
  );
};

export default Card;
