import React, { useState } from "react";
import {admin} from '../../data'
import { VisibilityOff } from "@material-ui/icons";

const Admin = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {title} = admin

  return (
    <form action="/Home" className="w-full font-['Noto Sans TC'] ">
      <div className="w-full bg-white  text-center drop-shadow">
        <h1 className="text-2xl text-Gray-700 font-medium py-2">{title}</h1>
      </div>
      <div className=" relative flex flex-col gap-4 p-4 items-start w-full justify-evenly">
        <label className="text-black">系統帳號</label>
        <input
          className="w-full p-4  pr-12 rounded-md text-black outline-none border "
          placeholder="使用者帳號"
          required
          minLength={6}
          maxLength={12}
        />
      </div>
      <div className=" relative flex flex-col gap-4 p-4 items-start w-full justify-evenly">
        <label className="text-black">系統密碼</label>
        <input
          className="w-full p-4  pr-12 rounded-md text-black outline-none border "
          placeholder="使用者密碼"
          required
          type={passwordShown ? "text" : "password"}
          minLength={6}
          maxLength={12}
        />
        <div className="absolute pt-10 right-0 pr-8 flex items-center ">
          <VisibilityOff
            onClick={togglePasswordVisiblity}
            className="text-gray-500 cursor-pointer"
          />
        </div>
      </div>
      <div className=" relative flex  gap-4 p-4 items-start w-full justify-evenly">
        <input
          type="submit"
          value={"登入"}
          className="w-full bg-sky-700 text-lg font-medium text-white p-4 rounded-sm"
        />
      </div>
    </form>
  );
};

export default Admin;
