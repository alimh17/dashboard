import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { trackList } from "../../../data/trackList";
import { BsPlayCircleFill } from "react-icons/bs";

const Slider = () => {
  return (
    <Splide
      tag="div"
      className="w-full mx-4 my-1"
      options={{
        perPage: 5,
        arrows: false,
        pagination: false,
        gap: "1rem",
        focus: "center",
      }}
    >
      {trackList.map((item, index) => (
        <SplideSlide
          key={index}
          className="group rounded-lg p-2 flex flex-col items-center cursor-pointer transition-all duration-200 ease-in hover:bg-dark_text_next "
        >
          <span className="absolute top-1/4 z-10 text-dark_text_next hidden group-hover:block">
            <BsPlayCircleFill className="text-5xl opacity-70" />
          </span>
          <img alt="track" className="rounded-lg group-hover:opacity-80" src={item.Cover} />
          <h2 className="w-full text-left text-dark_text px-2 py-1 group-hover:text-dark_primary">
            {item.Title}
          </h2>
          <span className="w-full text-left px-2 py-1 text-dark_text_next group-hover:text-dark_primary_next ">
            {item.Artist}
          </span>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider;
