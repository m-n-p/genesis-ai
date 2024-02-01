import React from "react";

const GridComp = ({ title, desc, imgsrc }) => {
  return (
    <div className="max-w-sm  border border-gray-200 rounded-2xl shadow bg-[#15254C]">
      <img className="rounded-t-lg w-full" src={imgsrc} alt="" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default GridComp;
