import Nav from "./Nav";
import Input from "./Input";
import React from "react";
// import Section from "./Section";

const Home = ({ data, setData }) => {
  return (
    <div className="md:w-full">
      <Nav />
      <Input />
      <p>{data}</p>
      {/* <Section /> */}
      {/* <QrcodeScreen /> */}
    </div>
  );
};

export default Home;
