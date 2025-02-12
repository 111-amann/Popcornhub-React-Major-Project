import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i class="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[45%] mx-2 p-2 text-md outline-none focus:border-zinc-600 text-zinc-300 rounded-xl border-[2px] border-zinc-700"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && <i onClick={()=> setQuery("")} class="text-zinc-400 text-2xl ri-close-fill"></i>}
      
      <div className="w-[45%] max-h-[50vh] bg-zinc-600 absolute top-[80%] left-[3%] overflow-auto rounded-md">
        {/* <Link className="w-full text-zinc-300 py-2 px-5 flex items-center border-b-[1px] border-zinc-500 hover:bg-zinc-500 hover:text-zinc-200 duration-300 font-semibold">
          <img src="" alt="" />
          <span>Movie Name</span>
        </Link>    */}
      </div>
    </div>
  );
};

export default Topnav;
