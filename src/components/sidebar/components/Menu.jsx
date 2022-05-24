import React from "react";
import { CgMusic } from "react-icons/cg";
import { BiPodcast, BiAlbum } from "react-icons/bi";
import { GiHeartInside } from "react-icons/gi";
import { BsFillCalendar3EventFill } from "react-icons/bs";

const Menu = () => {
  return (
    <div className="h-1/2 w-full flex flex-col justify-evenly ">
      <h2 className="text-dark_text_next  px-5 ">Menu</h2>
      <ul className="p-2 w-full ">
        <li className="text-dark_text p-2  flex items-center cursor-pointer text-xl hover:bg-dark_primary rounded-sm">
          <CgMusic className="text-dark_text_next" />
          <span className="mx-2">Explore</span>
        </li>
        <li className="text-dark_text p-2   flex items-center justify-between cursor-pointer text-xl hover:bg-dark_primary rounded-sm">
          <div className="flex items-center">
            <BiPodcast className="text-dark_text_next" />
            <span className="mx-2">Podcast</span>
          </div>
          <span className="w-2 h-2 bg-dark_text_next rounded-full"></span>
        </li>
        <li className="text-dark_text p-2   flex items-center cursor-pointer text-xl hover:bg-dark_primary rounded-sm">
          <BiAlbum className="text-dark_text_next" />
          <span className="mx-2">Album</span>
        </li>
        <li className="text-dark_text p-2   flex items-center cursor-pointer text-xl hover:bg-dark_primary rounded-sm">
          <GiHeartInside className="text-dark_text_next" />
          <span className="mx-2">Artists</span>
        </li>
        <li className="text-dark_text p-2   flex items-center cursor-pointer text-xl hover:bg-dark_primary rounded-sm">
          <BsFillCalendar3EventFill className="text-dark_text_next" />
          <span className="mx-2">Events</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
