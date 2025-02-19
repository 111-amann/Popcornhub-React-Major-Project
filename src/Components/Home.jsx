import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";

const Home = () => {
  document.title = "Homepage";
  const [wallpaper, setWallpaper] = useState(null)

  const getHeaderWallpaper = async () => {
    try {
      const response = await axios.get(`trending/all/day`);
      let randomData = (response.data.results[(Math.random()*response.data.results.length).toFixed()]);
      setWallpaper(randomData)
    } catch (err) {
      console.error("Error: ", err);
    }
  };
  
  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);

return  wallpaper ? (
    <>
      {" "}
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data = {wallpaper} />
      </div>
    </>
  ) : <h1>Loading...</h1>
};
export default Home;
