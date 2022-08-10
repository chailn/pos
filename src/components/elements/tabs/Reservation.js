import React from "react";
import CustomBtn from "../CustomBtn";
import InputBox from "../InputBox";

const Reservation = () => {
  return (
    <div className="flex flex-col gap-4 items-start  w-full md:w-2/4 justify-center">
      <InputBox value="Name" placeValue="Linda f.e" />
      <InputBox value="Email" placeValue="chailn8808@gmail.com" />
      <InputBox value="Account Number" placeValue="99 9999 99999 999" />
      <InputBox value="Phone Number" placeValue="09xxxxxxxx" />

      <div>
        <CustomBtn children="Make Reservation" />
      </div>
    </div>
  );
};

export default Reservation;
