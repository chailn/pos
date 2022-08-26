import React from "react";
import CustomBtn from "../CustomBtn";
import InputBox from "../InputBox";

const Request = () => {
  return (
    <div className="flex flex-col gap-4 items-start  w-full md:w-2/4 justify-center">
      <InputBox value="Email" placeValue="chailn8808@gmail.com" />
      <div>
        <CustomBtn children="Make Request" />
      </div>
    </div>
  );
};

export default Request;
