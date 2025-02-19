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
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[15%]">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[53%] mx-2 p-2 text-md outline-none focus:border-zinc-600 text-zinc-300 rounded-xl border-[2px] border-zinc-700"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="w-[45%] max-h-[50vh] bg-zinc-600 absolute top-[75%] left-[18%] overflow-auto rounded-md">
        {searches &&
          searches.map((s, i) => (
            <Link
              key={i}
              className="w-full text-zinc-300 py-2 px-5 flex items-center border-b-[1px] border-zinc-500 hover:bg-zinc-500 hover:text-zinc-200 duration-300 font-semibold"
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
                className="w-12 h-17 object-cover rounded-md mr-4 my-2 shadow"
              />
              <span>{s.title || s.original_title || s.original_name || s.name
              }</span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;
