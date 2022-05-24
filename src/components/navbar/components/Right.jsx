import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Right = () => {
  return (
    <div className="w-1/2 flex justify-end items-center">
      <IoMdNotificationsOutline className="text-2xl text-dark_text_next" />
      <img
        className="w-10 h-10 m-2 rounded-full"
        src={process.env.PUBLIC_URL + "/img/profile.jpg"}
      />
      <p className="text-dark_text">Alimh17</p>
      <MdOutlineKeyboardArrowDown className="text-dark_text text-xl" />
    </div>
  );
};

export default Right;
