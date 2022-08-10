import React from "react";
import CustomBtn from "../CustomBtn";
import InputBox from "../InputBox";

const SendMessage = () => {
  return (
    <div className="flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-center">
      <InputBox value="Name" placeValue="Linda f.e" />
      <InputBox value="Email" placeValue="chailn8808@gmail.com" />
      <InputBox value="Message" placeValue="Yummy" />

      <div>
        <CustomBtn children="Send Message" />
      </div>
    </div>
  );
};

export default SendMessage;
