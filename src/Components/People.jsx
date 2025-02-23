import React, { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./templates/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Popcornhub | Peoples";

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-fit md:px-10 px-0 py-5 overflow-hidden overflow-y-auto bg-[#1F1E24]">
      <div className="w-full flex sm:flex-row flex-col items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold text-zinc-400 sm:text-left text-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm sm:static absolute left-[2%]"
          ></i>
          Peoples
        </h1>
        <div className="flex justify-center items-center w-full px-2 gap-2">
          <Topnav />
        </div>
        <div className="w-10"></div>
      </div>
      <hr className="h-[1px] text-zinc-700 w-full" />
      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={<h4 className="text-center">Loading...</h4>}
      >
        <Card data={person} personPara={true} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
