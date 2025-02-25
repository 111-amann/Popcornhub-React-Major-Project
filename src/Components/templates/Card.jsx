import React from "react";
import { Link, useNavigate } from "react-router-dom"; 

const Card = ({ data, personPara, title, Tvdetails=false }) => {
  const navigate = useNavigate()
  return (
      <div className="h-fit flex flex-wrap xl:gap-2 md:gap-3 gap-1 md:mt-5 mt-10 justify-center">
        {data.map((c, i) => ( 
          <Link key={i} to={`/${c.media_type || title}/details/${c.id}`} className="flex flex-col items-center justify-center lg:mb-5 mb-2 p-1 xl:w-[15vw] xl:h-[26vw] lg:w-[15vw] lg:h-[27vw] md:w-[20vw] md:h-[35vw] w-[40vw] h-[70vw] bg-zinc-900 rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)] relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                c.poster_path || c.backdrop_path || c.profile_path
              }`} 
              alt="banner"
              className="w-[80%] h-[60%] object-cover rounded-md shadow"
            />
            <h1 className="xl:text-lg sm:text-md text-sm font-semibold md:mt-2 mt-3">
              {c.title ||
                c.original_title ||
                c.name ||
                c.original_name
                }
            </h1>
            {personPara ? <p className="text-zinc-300 sm:text-sm text-xs">
              {c.known_for_department
              }
            </p>: <p className="text-zinc-300 text-sm xl:block hidden">
              {c.overview.slice(0, 35)
              }...
              <Link className="text-zinc-400">More</Link>
            </p>}
              {/* {c.vote_average && <p className="text-zinc-300 text-left text-sm xl:block hidden absolute left-2 bottom-[3%]">Rating - {(c.vote_average / 1).toFixed(1)}/10</p>} */}
              {c.vote_average && <div className="xl:w-[3vw] xl:h-[3vw] md:w-[3vw] md:h-[3vw] sm:w-[6vw] sm:h-[6vw] w-[7vw] h-[7vw] bg-yellow-500 rounded-full absolute lg:right-0 sm:right-2 sm:flex hidden justify-center items-center font-semibold lg:text-sm md:text-xs sm:text-sm text-[12px] xl:top-[60%] md:top-[68%] sm:top-[70%]">{(c.vote_average / 1).toFixed()}/10</div>}
          </Link>
        ))}
      </div>
  );
};

export default Card;
