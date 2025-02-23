import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0,.2),rgba(0, 0, 0,.3),rgba(0, 0, 0,.6)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full sm:h-[50vh] h-[30vh] flex flex-col justify-end items-start sm:p-10 p-3"
    >
      <h1 className="w-[50%] md:text-5xl sm:text-4xl text-xl font-black sm:mb-3 mb-0">
        {data.title || data.original_title || data.original_name || data.name}
      </h1>
      <p className="w-[50%] text-zinc-200 md:text-md text-sm sm:block hidden">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">More</Link>
      </p>
      <p className="w-[70%] text-zinc-200 md:text-md sm:text-sm text-xs sm:hidden block">
        {data.overview.slice(0, 65)}... 
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">More</Link>
      </p>
      <p className="md:mb-3 mb-0 md:text-sm sm:text-xs text-[9px]">
        <i className="ri-megaphone-fill mr-1 text-[#6556CD] md:text-md sm:text-sm text-xs"></i>
        {data.release_date || data.first_air_date}
        <i className="ri-album-fill mr-1 text-[#6556CD] sm:ml-5 ml-2 md:text-md sm:text-sm text-xs"></i>
        {data.media_type.toUpperCase() || "no iformation"}
      </p>
      <Link className="md:px-4 md:py-3 sm:px-3 px-2 sm:py-2 py-1 bg-yellow-500 hover:bg-yellow-400 duration-300 rounded lg:mt-3 md:mt-0 mt-3 md:text-sm sm:text-xs text-[10px] font-semibold text-black">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
