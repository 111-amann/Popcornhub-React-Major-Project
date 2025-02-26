import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data, disableNavigation }) => {
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
    <div className="w-full h-[40vh] sm:px-5 px-1 relative ">
      <div
        ref={scrollContainer}
        className="w-full flex overflow-auto gap-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {data.length > 0 ? (
          data.map((item, i) =>
            
              <Link
                to={`/${item.media_type}/details/${item.id}`}
                key={i}
                className="lg:min-w-[15%] sm:min-w-[25%] min-w-[45%] h-auto card bg-zinc-900 sm:p-2 p-1 sm:mb-2 flex flex-col items-center justify-center rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)]"
              >
                <img
                  src={item.poster_path || item.backdrop_path ? `https://image.tmdb.org/t/p/original/${
                    item.poster_path || item.backdrop_path
                  }` : noimage}
                  alt="banner"
                  className="sm:w-full w-[80%] object-cover rounded-md shadow"
                />
                <h1 className="sm:text-lg text-md font-semibold sm:mt-2 mt-[2px]">
                  {item.title ||
                    item.original_title ||
                    item.original_name ||
                    item.name}
                </h1>
                <p className="text-zinc-300 sm:text-sm text-xs sm:px-0 px-2">
                  {item.overview.slice(0, 35)}...
                  <Link className="text-zinc-400">More</Link>
                </p>
              </Link>
            
          )
        ) : (
          <h1 className="text-xl text-zinc-400 font-semibold text-center mt-5">
            Nothing to Show
          </h1>
        )} 
      </div>
      {data.length > 0 ? (
        <div>
          {" "}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[70%] -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm sm:block hidden"
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[70%] -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm sm:block hidden"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HorizontalCards;
