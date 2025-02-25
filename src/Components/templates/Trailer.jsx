import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);
  console.log(ytvideo);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,.9)] z-[100] aspect-video">
      <i
        onClick={() => navigate(-1)}
        className="ri-close-fill hover:text-yellow-500 sm:text-2xl md:text-3xl text-xl absolute right-[5%] top-[3%]"
      ></i>
      { ytvideo ?
      <ReactPlayer
        height="85%"
        width="75%"
        controls="true"
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      ></ReactPlayer>:
      <Notfound />}
    </div>
  ) 

};

export default Trailer;
