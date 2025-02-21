import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);

  const getSerches = async () => {
    try {
      const {data} = await axios.get(`/search/movie?query=${query}`);
      // console.log(data.results);
      setSearches(data.results);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getSerches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center xl:pl-[15%] lg:pl-[10%] md:pl-[6%] pl-0">
      <i className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md ri-search-line mr-2"></i>
      <div className="relative w-full">
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="xl:w-[53%] md:w-[80%] sm:w-[90%] w-[100%] md:p-2 p-1 md:text-md text-sm outline-none focus:border-zinc-600 text-zinc-300 rounded-xl border-[2px] border-zinc-700"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md md:block hidden ri-close-fill"
        ></i>
      )}

      <div className={`xl:w-[53%] md:w-[80%] sm:w-[90%] w-[100%] xl:max-h-[50vh] md:max-h-[35vh] max-h-[30vh] bg-zinc-600 absolute top-[75%] left-0 overflow-auto rounded-md`}>
        {searches &&
          searches.map((s, i) => (
            <Link 
              key={i}
              className="w-full text-zinc-300 xl:py-2 py-1 xl:px-5 px-2 flex items-center border-b-[1px] border-zinc-500 hover:bg-zinc-500 hover:text-zinc-200 duration-300 font-semibold"
            >
              <img
                src={
                  s.poster_path || s.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.poster_path || s.backdrop_path
                      }`
                    : noimage
                }
                alt=""
                className="xl:w-12 xl:h-17 md:w-8 md:h-12 sm:w-5 sm:h-8 w-3 sm:h-5 object-cover md:rounded-md sm:rounded rounded-[2px] mr-4 my-2 shadow"
              />
              <span className="xl:text-md md:text-sm sm:text-xs text-[11px]">{s.title || s.original_title || s.original_name || s.name
              }</span>
            </Link>
          ))}
      </div></div>
    </div>
  );
};

export default Topnav;
