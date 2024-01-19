/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className="paddingx paddingy text-white flex items-center  justify-between"
      style={{
        zIndex: 20,
      }}
    >
      <div className="w-[20%]">
        <img alt="" className="full" src="/logowhite.png" />
      </div>

      <Link
        href={"/login"}
        className="bg-black  h-fit py-3 px-6 rounded-lg text-sm"
      >
        Login
      </Link>
    </div>
  );
};

export default Header;
