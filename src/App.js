import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "./components/Layout/Title";
import Footer from "./components/Layout/Footer";
import CheckInventory from "./components/CheckInventory/CheckInventory";
import Sort from "./components/CheckInventory/Sort";
import QrcodeScreen from "./components/CheckInventory/QrcodeScreen";
import Loading from "./components/Home/Loading";
import Admin from "./components/Home/Admin";
import Home from "./components/Home/Home";
import { createHashHistory } from "history";
import Product from "./components/CheckInventory/Product";

function App() {
  const [data, setData] = useState("Not Found");
  function BasicLayout() {
    return (
      <>
        <Title />
        <Outlet />
        <Footer />
      </>
    );
  }

  function AdminLayout() {
    return <Outlet />;
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <Routes>
        <Route history={createHashHistory} path="/" element={<AdminLayout />}>
          <Route index element={<Loading />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Home" element={<Home />} />
        </Route>
        <Route history={createHashHistory} path="/" element={<BasicLayout />}>
          <Route path="/CheckInventory" element={<CheckInventory />} />
          <Route
            data={data}
            setData={setData}
            path="/QrcodeScreen"
            element={<QrcodeScreen />}
          />
          <Route path="/CheckInventory/Sort" element={<Sort/>} />
          <Route path="/CheckInventory/Sort/product/:id" element={<Product/>} />
        </Route>
        
      </Routes>
      {/* <QrcodeScreen /> */}
    </div>
  );
}

export default App;
