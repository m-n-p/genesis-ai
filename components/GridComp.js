/* eslint-disable @next/next/no-img-element */
import React from "react";

const GridComp = ({ title, desc, imgsrc }) => {
  return (
    <div className="w-full flex h-52 border items-center justify-center justify-self-center mx-auto border-gray-200 rounded-lg  ">
      <img
        className="rounded-l-lg w-2/5 object-cover h-full"
        src={imgsrc}
        alt=""
      />

      <div className="h-3/5 justify-evenly  items-start px-4 flex flex-col space-y-2">
        <h5 className=" text-2xl font-bold tracking-tight text-left">
          {title}
        </h5>

        <p className=" font-normal text-gray-400 text-left">{desc}</p>
      </div>
    </div>
  );
};

export default GridComp;
