import React from "react";

const SlideComp = ({ text, imgsrc }) => {
  return (
    <div className="bg-[#15254C] rounded-2xl p-3 flex flex-col space-y-3">
      <img src={imgsrc} className="" />
      <div className="text-xl text-white text-center">{text}</div>
    </div>
  );
};

export default SlideComp;
