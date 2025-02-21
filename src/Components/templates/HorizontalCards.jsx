import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300; // Adjust for smooth scroll
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-[40vh] px-5 relative">
      <div
        ref={scrollContainer}
        className="w-full flex overflow-auto gap-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className="min-w-[15%] card bg-zinc-900 p-2 mb-2 flex flex-col items-center justify-center rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)]"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${
                item.poster_path || item.backdrop_path
              }`}
              alt="banner"
              className="w-full object-cover rounded-md shadow"
            />
            <h1 className="text-lg font-semibold mt-2">
              {item.title ||
                item.original_title ||
                item.original_name ||
                item.name}
            </h1>
            <p className="text-zinc-300 text-sm">
              {item.overview.slice(0, 35)}...
              <Link className="text-zinc-400">More</Link>
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[70%] -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 text-md"
      >
        <i className="ri-arrow-left-line"></i>
      </button>
      <button
        onClick={() => scroll("right")} 
        className="absolute right-0 top-[70%] -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 text-md"
      >
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default HorizontalCards;
