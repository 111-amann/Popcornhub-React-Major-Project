import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:p-10 sm:p-5 p-3 w-full">
      <div className="flex justify-center items-center">
          <div className="logo inline-block">
            <img
              className="xl:w-[3vw] lg:w-[4vw] md:w-[5vw] sm:w-[6vw] w-[9vw] inline-block"
              src="/popcornhublogo.png"
              alt=""
            />
          </div>
          <h1 className="md:text-2xl text-xl font-bold text-white relative">
            <span className="py-1 tracking-tight">
              Popcorn
              <span className="bg-yellow-500 rounded-sm text-black p-[2px] ml-[3px]">
                hub
              </span>
            </span>
          </h1>
        </div>
      <p className="md:text-lg sm:text-md text-sm sm:w-[90%] w-[100%]">
        Welcome to Popcornhub, your ultimate destination for discovering and
        exploring the world of movies and TV shows! Whether you're a casual
        viewer or a hardcore cinephile, we bring you the latest trends, popular
        releases, and timeless classics—all in one place. At Popcornhub, we
        believe in the power of storytelling. Our platform provides curated
        lists of trending movies, top-rated TV shows, and fan-favorite actors.
        Stay updated with what's hot, explore different genres, and find your
        next binge-worthy watch with ease. Join us on this cinematic journey and
        make every movie night special!
      </p>
      <p className="md:text-lg sm:text-md text-sm sm:w-[90%] w-[100%]">
        This website is developed using React, Tailwind CSS, and Remix Icons,
        ensuring a fast, responsive, and visually appealing interface. To
        provide accurate and up-to-date movie details, we integrate the TMDB
        API, fetching data dynamically. With Infinite Scroll, you can
        effortlessly explore more content without needing to navigate through
        multiple pages. Whether you're looking for the latest blockbuster or an
        underrated gem, Popcornhub makes movie discovery easy and enjoyable.
        Stay updated, explore new favorites, and immerse yourself in the world
        of entertainment! 🎬🍿
      </p>
      <Link
        to="/"
        className="md:px-5 md:py-2 md:mt-5 sm:px-3 sm:py-2 sm:mt-3 px-2 py-1 mt-2 bg-yellow-500 rounded-lg text-black hover:bg-yellow-400"
      >
        Go Back
      </Link>
    </div>
  );
};

export default About;
