import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="border-b">
      <ul className="lg:flex items-center  flex justify-evenly text-base text-gray-500 hover:text-sky-700 font-bold py-2 font-sans ">
        <li>
          <Link to="/CheckInventory">以輸入查詢</Link>
        </li>
        <li>
          <Link to="/CheckInventory/Sort">以分類查詢</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
