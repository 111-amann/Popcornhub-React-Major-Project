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
      className="w-full h-[50vh] flex flex-col justify-end items-start p-10"
    >
      <h1 className="w-[50%] text-5xl font-black">
        {data.title || data.original_title || data.original_name || data.name}
      </h1>
      <h5 className="mb-3 mt-1">
        <i className="ri-megaphone-fill mr-2 text-[#6556CD]"></i>
        {data.release_date || data.first_air_date}
      </h5>
      <p className="w-[50%] text-zinc-200">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">More</Link>
      </p>
      <h5 className="mb-3">
        <i class="ri-album-fill mr-1 text-[#6556CD]"></i>
        {data.media_type.toUpperCase() || "no iformation"}
      </h5>
      <Link className="px-4 py-3 bg-yellow-500 rounded mt-3 text-sm font-semibold text-black">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
