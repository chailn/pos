import React from "react";
// import QrcodeScreen from "./elements/QrcodeScreen";

const Section = ({ data, setData }) => {
  // const { data } = QrcodeScreen;
  return (
    <div className="w-full flex items-center justify-center">
      <div className="text-white text-center ">{data}</div>
    </div>
  );
};

export default Section;
