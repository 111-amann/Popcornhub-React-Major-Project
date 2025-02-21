import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
      <div className="h-fit flex flex-wrap xl:gap-2 md:gap-3 gap-1 md:mt-5 mt-10 justify-center">
        {data.map((c, i) => (
          <Link key={i} className="flex flex-col items-center justify-center lg:mb-5 mb-2 p-1 xl:w-[15vw] xl:h-[26vw] lg:w-[15vw] lg:h-[27vw] md:w-[20vw] md:h-[35vw] w-[40vw] h-[70vw] bg-zinc-900 rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)]">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path
              }`} 
              alt="banner"
              className="w-[80%] h-[60%] object-cover rounded-md shadow"
            />
            <h1 className="xl:text-lg sm:text-md text-sm font-semibold md:mt-2 mt-3">
              {c.title ||
                c.original_title ||
                c.original_name ||
                c.name}
            </h1>
            <p className="text-zinc-300 text-sm xl:block hidden">
              {c.overview.slice(0, 35)}...
              <Link className="text-zinc-400">More</Link>
            </p>
          </Link>
        ))}
      </div>
  );
};

export default Card;
