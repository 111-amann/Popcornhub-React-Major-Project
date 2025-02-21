import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Popcornhub | Popular " + category.toUpperCase();

  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `${category}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-fit md:px-10 p-0 md:py-5 bg-[#1F1E24]">
      <div className="w-full flex items-center">
        <h1 className="lg:text-2xl md:text-xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line bg-gray-800 text-white p-1 rounded-full shadow-lg hover:bg-yellow-500 transition mr-5"
          ></i>
          Popular
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["movie", "tv"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w-10"></div>
      </div>
      <hr className="h-[1px] text-zinc-700 w-full" />
      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <Card data={popular} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default popular;
