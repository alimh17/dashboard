import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const PlayList = () => {
  return (
    <div className="h-1/2 w-full">
      <div className="flex justify-between items-center text-base">
        <span className="text-dark_text_next p-2">Playlist</span>
        <AiOutlinePlusCircle className="text-dark_text_next m-2 text-xl" />
      </div>
      <ul></ul>
    </div>
  );
};

export default PlayList;
