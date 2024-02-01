import React from "react";

const MainComp = ({ text, imgsrc, des }) => {
  return (
    <div className="bg-[#15254C] w-[95%] md:w-[80%] lg:w-[60%] mx-auto rounded-2xl p-3 flex flex-col space-y-3">
      <img src={imgsrc} className="rounded-2xl w-full" />
      <div className="text-xl text-white flex justify-start">{text}</div>
      <div className="text-sm text-white flex justify-start">{des}</div>
    </div>
  );
};

export default MainComp;
