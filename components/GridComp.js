import React from "react";

const GridComp = ({ title, desc, imgsrc }) => {
  return (
    <div class="max-w-sm  border border-gray-200 rounded-2xl shadow bg-[#15254C]">
      <img class="rounded-t-lg w-full" src={imgsrc} alt="" />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default GridComp;
