import Title from "./components/Title";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React, { useState } from "react";
import QrcodeScreen from "./components/elements/QrcodeScreen";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState("Not Found");
  return (
    <div className="md:w-full">
      <Title />
      <Routes>
        <Route data={data} setData={setData} path="/" element={<Home />} />
        <Route
          data={data}
          setData={setData}
          path="/elements/QrcodeScreen"
          element={<QrcodeScreen />}
        />
      </Routes>
      <Footer />
      {/* <QrcodeScreen /> */}
    </div>
  );
}

export default App;
