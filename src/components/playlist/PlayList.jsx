import React from "react";
import { Playlist } from "../../data/Playlist";

const PlayList = () => {
  return (
    <section className="w-1/3">
      <h2 className="text-3xl p-2 text-dark_text">PlayList</h2>
      <ul className="mx-2">
        {Playlist.map((item, index) => (
          <li
            key={index}
            className="relative flex items-center justify-center my-2 rounded-lg"
          >
            <img
              alt="cover"
              src={item.Cover}
              className="w-full h-32 rounded-lg"
            />
            <div className="absolute bottom-0 rounded-b-lg bg-dark_text w-full text-center p-2 opacity-70">
              <span className="text-xl text-dark_primary">{item.Title}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlayList;
