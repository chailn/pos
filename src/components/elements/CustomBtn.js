import React from "react";

const CustomBtn = ({ onClickItem, btnPadding, children }) => {
  return (
    <button
      onClick={onClickItem}
      className={`px-12 py-3 animate-pulse  border-4  border-white p-2 bg-black/30  uppercase text-white rounded-md  font-bold ${btnPadding}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
