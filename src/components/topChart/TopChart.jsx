import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiFillPlusCircle } from "react-icons/ai";
import { trackList } from "../../data/trackList";

const TopChart = () => {
  return (
    <section className="w-2/3 flex flex-col  ">
      <h2 className="text-3xl p-2 text-dark_text">TopChart</h2>
      <ul className="flex flex-col container h-96">
        {trackList.map((item, index) => (
          <li
            key={index}
            className="group flex justify-between h-28 w-full p-2 rounded-lg hover:bg-dark_text_next transition-all duration-200 ease-in"
          >
            <div className="w-2/3 flex">
              <img alt="track" src={item.Cover} className=" rounded-lg" />
              <div className="flex flex-col justify-center">
                <span className="m-2 text-xl text-dark_text group-hover:text-dark_primary">
                  {item.Title}
                </span>
                <span className="m-2 text-xl text-dark_text_next group-hover:text-dark_primary">
                  {item.Artist}
                </span>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-evenly">
              <span className="text-dark_text text-base group-hover:text-dark_primary">
                2:32
              </span>
              <span className="text-dark_text text-2xl group-hover:text-dark_primary">
                <IoMdHeartEmpty />
              </span>
              <span className="text-dark_text text-2xl group-hover:text-dark_primary">
                <AiFillPlusCircle />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopChart;
