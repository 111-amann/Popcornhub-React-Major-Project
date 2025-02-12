import axios from "../../utils/axios";
import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const getSerches = async () => {
    try{
      const d = axios.get("")
    }
    catch(err){
      console.error("Error: ",err);
    }
  }

  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-500 p-4">
          <div className="flex justify-center items-center">
          <div className="logo inline-block">
          <img className="w-[3vw] inline-block" src="/popcornhublogo.png" alt="" /></div>
          <h1 className="text-2xl font-bold text-white text-center relative">
          <span className="p-1 tracking-tight">Popcorn<span className="bg-yellow-500 rounded-sm text-black p-[2px] ml-[3px]">hub</span></span>
        </h1>
        </div>
        <div className="underline w-full h-[1px] bg-zinc-500 mt-4"></div>
        <nav className="flex flex-col text-zinc-400">
            <h1 className="font-semibold mt-5 text-lg mb-1 text-white bg-zinc-800 rounded p-2">New Feeds</h1>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-fire-fill"></i>Trending</Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-bard-fill"></i>Popular</Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-movie-2-fill"></i>Movies</Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-team-fill"></i>People</Link>
        </nav>
        <div className="underline w-full h-[1px] bg-zinc-500 mt-4"></div>

        <nav className="flex flex-col text-zinc-400">
            <h1 className="font-semibold mt-5 text-lg mb-1 text-white bg-zinc-800 rounded p-2">Website Information</h1>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-phone-fill"></i>Contact</Link>
            <Link className="hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-300"><i class="mr-2 ri-information-fill"></i>About PopcornHub</Link>     
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
