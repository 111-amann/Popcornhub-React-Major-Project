import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Popcornhub | Movies";

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-fit md:px-10 px-0 py-5 overflow-hidden overflow-y-auto bg-[#1F1E24]">
      <div className="w-full flex sm:flex-row flex-col items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold text-zinc-400 sm:text-left text-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm sm:static absolute left-[2%]"
          ></i>
          Movie<span className="ml-2 lg:text-sm md:text-xs text-zinc-500 md:inline hidden">({category})</span>
        </h1>
        <div className="flex justify-center items-center w-full px-2 gap-2">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="w-10"></div>
      </div>
      <hr className="h-[1px] text-zinc-700 w-full" />
      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <Card data={movie} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
