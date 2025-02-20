import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./templates/Card";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all")
  const [duration, setDuration] = useState("day")
  const [trending, setTrending] = useState(null)

  const getTrending = async () => {
    try {
      const {data} = await axios.get(`trending/${category}/${duration}`);
      setTrending(data.results)
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  
  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen px-10 py-5 overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line bg-gray-800 text-white p-1 rounded-full shadow-lg hover:bg-yellow-500 transition mr-5"
          ></i>
          Trending
        </h1>
        <Topnav queryBox="left-[27.2%]" queryBoxWidth="w-[40.6%]" />
        <Dropdown title="Category" options={["movie","tv","all"]} func={(e)=>setCategory(e.target.value)} />
        <div className="w-10"></div>
        <Dropdown title="Duration" options={["day","week"]} func={(e)=>setDuration(e.target.value)} />
      </div>
        <hr className="h-[1px] text-zinc-700 w-full" />
        <Card data={trending} />
    </div>
  ): <Loading />
};

export default Trending;
