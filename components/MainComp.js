/* eslint-disable @next/next/no-img-element */
import React from "react";

const MainComp = ({ text, imgsrc, des }) => {
  return (
    <div className="  mx-auto overflow-hidden relative rounded-md  flex flex-col space-y-3">
      <img src={imgsrc} className=" w-full" alt="" />
      <div className="w-full absolute bottom-0 left-0 bg-black opacity-90 text-center py-6 px-6 flex flex-col space-y-1">
        <div className="text-xl font-semibold text-white ">{text}</div>
        <div className="font-light text-white ">{des}</div>
      </div>
    </div>
  );
};

export default MainComp;
