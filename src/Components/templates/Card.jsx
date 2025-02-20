import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
      <div className="flex flex-wrap gap-2 mt-5">
        {data.map((c, i) => (
          <Link key={i} className="flex flex-col items-center justify-center mb-2 p-1 w-[11.3vw] h-[24vw] bg-zinc-900 rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)]">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path
              }`}
              alt="banner"
              className="w-[80%] object-cover rounded-md shadow h-[60%]"
            />
            <h1 className="text-lg font-semibold mt-2">
              {c.title ||
                c.original_title ||
                c.original_name ||
                c.name}
            </h1>
            <p className="text-zinc-300 text-sm">
              {c.overview.slice(0, 35)}...
              <Link className="text-zinc-400">More</Link>
            </p>
          </Link>
        ))}
      </div>
  );
};

export default Card;
