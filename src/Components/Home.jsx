import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";
import ResponsiveSideNav from "./templates/ResponsiveSideNav";

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
      <div className="md:w-[80%] w-full h-full overflow-auto">
      <div className="md:hidden block">
          <ResponsiveSideNav />
        </div>
      <h1 className="md:hidden block text-xl text-center pt-3 font-bold text-white relative">
            <span className="tracking-tight">
              Popcorn
              <span className="bg-yellow-500 rounded-sm text-black p-[1px] ml-[2px]">
                hub
              </span>
            </span>
          </h1>
        <Topnav />
        <Header data = {wallpaper} />
        <div className="flex justify-between sm:p-5 p-2">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-zinc-400">Trending</h1>
        <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setCategory(e.target.value)}/>
      </div>
        <HorizontalCards data = {trending} />
      </div>
    </>
  ) : <Loading />
};
export default Home;
