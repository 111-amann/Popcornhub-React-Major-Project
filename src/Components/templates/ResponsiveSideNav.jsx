import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="z-50">
        <i
          className="ri-menu-line md:hidden inline-block text-xl fixed right-[2%] top-14 z-50 bg-gray-800 p-1 rounded shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        ></i>

        {isOpen && (
          <div
            className="fixed bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <div
          className={`fixed top-14 right-0 w-[75%] sm:w-[50%] h-full bg-[#1F1E24] shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <i
            className="ri-close-line absolute top-6 right-4 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          ></i>

          <nav className="flex flex-col text-zinc-400">
            <h1 className="font-semibold mt-5 text-lg mb-1 text-white bg-zinc-800 rounded p-2">
              New Feeds
            </h1>
            <Link
              to="/trending"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-fire-fill"></i>Trending
            </Link>
            <Link
              to="/popular"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-bard-fill"></i>Popular
            </Link>
            <Link
              to="/movie"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-movie-2-fill"></i>Movies
            </Link>
            <Link
              to="/tv"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-tv-2-fill"></i>TV Shows
            </Link>
            <Link
              to="/person"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-team-fill"></i>People
            </Link>
          </nav>
          <div className="underline w-full h-[1px] bg-zinc-500 mt-4"></div>

          <nav className="flex flex-col text-zinc-400">
            <h1 className="font-semibold mt-5 text-lg mb-1 text-white bg-zinc-800 rounded p-2">
              Website Information
            </h1>
            <Link
              to="/contact"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-phone-fill"></i>Contact
            </Link>
            <Link
              to="/about"
              className="hover:bg-yellow-500 hover:text-white p-4 rounded-lg duration-300"
            >
              <i className="mr-2 ri-information-fill"></i>About PopcornHub
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResponsiveSideNav;
