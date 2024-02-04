/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <div
      className="paddingx  text-white flex items-center  justify-between"
      style={{
        zIndex: 20,
      }}
    >
      <div className="w-[50%] md:w-[30%] lg:w-[20%]">
        <img className="full" src="/logowhite.png" alt="" />
      </div>

      {/* <button className="bg-black  h-fit py-3 px-6 rounded-lg text-sm">
        Login
      </button> */}
    </div>
  );
};

export default Header;
