import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Left = () => {
  return (
    <div className="flex w-1/2 ">
      <div className="flex items-center text-2xl text-dark_text w-1/5">
        <MdKeyboardArrowLeft className="text-dark_text_next" />
        <MdKeyboardArrowRight />
      </div>
      <div className="flex w-4/5 ">
        <BsSearch className="text-dark_text relative top-4 left-5 text-xl" />
        <input
          type="text"
          className="bg-dark_primary rounded-md my-2 border-0 focus:border-0 w-full pl-8  focus:outline-none"
          placeholder="Search for music artist etc"
        />
      </div>
    </div>
  );
};

export default Left;
