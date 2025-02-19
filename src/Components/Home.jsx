import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

const Home = () => {
  document.title = "Homepage";
  const [wallpaper, setWallpaper] = useState(null)
  const [trending, setTrending] = useState(null)
  const [category, setCategory] = useState("all")

  const getHeaderWallpaper = async () => {
    try {
      const  {data} = await axios.get(`trending/all/day`);
      let randomData = (data.results[(Math.random()*data.results.length).toFixed()]);
      setWallpaper(randomData)
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const getTrending = async () => {
    try {
      const {data} = await axios.get(`trending/${category}/day`);
      setTrending(data.results)
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  
  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

return  wallpaper && trending ? (
    <>
      {" "}
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto">
        <Topnav />
        <Header data = {wallpaper} />
        <div className="flex justify-between p-5">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
        <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setCategory(e.target.value)}/>
      </div>
        <HorizontalCards data = {trending} />
      </div>
    </>
  ) : <h1>Loading...</h1>
};
export default Home;
