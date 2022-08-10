import React from "react";

const InputBox = ({ type, value, placeValue }) => {
  return (
    <div className="w-full">
      <label className="text-black">{value}</label>
      <input
        type={type}
        className="w-full p-4  pl-12 pr-12 rounded-md text-black outline-none border "
        placeholder={placeValue}
      />
    </div>
  );
};

export default InputBox;
