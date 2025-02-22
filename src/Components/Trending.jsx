import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Loading from "./Loading";
import Card from "./templates/Card";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  document.title = "Popcornhub | Trending";

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      // setTrending(data.results);
      setTrending(data.results);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen md:px-10 px-0 py-5 overflow-hidden overflow-y-auto">
      <div className="w-full flex sm:flex-row flex-col items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-lg text-md font-semibold text-zinc-400 sm:text-left text-center">
          <i
            onClick={() => navigate("/")}
            className="ri-arrow-left-line bg-gray-800 text-white p-1 rounded-full lg:shadow-lg md:shadow-md shadow-sm hover:bg-yellow-500 transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm sm:static absolute left-[2%]"
          ></i>
          Trending<span className="ml-2 lg:text-sm md:text-xs text-zinc-500 md:inline hidden">{category}/{duration}</span>
        </h1>
        <div className="flex justify-center items-center w-full px-2 gap-2">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="lg:w-10 md:w-7 sm:w-1 w-0"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      <hr className="h-[1px] text-zinc-700 w-full" />
      <Card data={trending} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Topnav from "./templates/Topnav";
// import Dropdown from "./templates/Dropdown";
// import axios from "../utils/axios";
// import Loading from "./Loading";
// import Card from "./templates/Card";
// import InfiniteScroll from "react-infinite-scroll-component";

// const Trending = () => {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState("all");
//   const [duration, setDuration] = useState("day");
//   const [trending, setTrending] = useState([]);
//   const [page, setPage] = useState(0);
//   const [hasMore, setHasMore] = useState(true);

//   const getTrending = async () => {
//     try {
//       const { data } = await axios.get(
//         `trending/${category}/${duration}`
//       );
//       // setTrending(data.results);
//       if (data.results.length > 0) {
//         setTrending((prev) => [...prev, ...data.results]);
//         setPage(page + 1);
//       } else {
//         setHasMore(false);
//       }
//     } catch (err) {
//       console.error("Error: ", err);
//     }
//   };

//   const refreshHandler = () => {
//     if (trending.length === 0) {
//       getTrending();
//     } else {
//       setPage(1);
//       setTrending([]);
//       getTrending();
//     }
//   };

//   useEffect(() => {
//     // getTrending();
//     refreshHandler();
//   }, [category, duration]);

//   return trending.length > 0 ? (
//     <div className="w-screen h-screen px-10 py-5">
//       <div className="w-full flex items-center">
//         <h1 className="text-2xl font-semibold text-zinc-400">
//           <i
//             onClick={() => navigate("/")}
//             className="ri-arrow-left-line bg-gray-800 text-white p-1 rounded-full shadow-lg hover:bg-yellow-500 transition mr-5"
//           ></i>
//           Trending
//         </h1>
//         <Topnav queryBox="left-[27.2%]" queryBoxWidth="w-[40.6%]" />
//         <Dropdown
//           title="Category"
//           options={["movie", "tv", "all"]}
//           func={(e) => setCategory(e.target.value)}
//         />
//         <div className="w-10"></div>
//         <Dropdown
//           title="Duration"
//           options={["day", "week"]}
//           func={(e) => setDuration(e.target.value)}
//         />
//       </div>
//       <hr className="h-[1px] text-zinc-700 w-full" />
//       <InfiniteScroll
//         dataLength={trending.length}
//         next={getTrending}
//         hasMore={hasMore}
//         loader={<h4>Loading...</h4>}
//       >
//         <Card data={trending} />
//       </InfiniteScroll>
//     </div>
//   ) : (
//     <Loading />
//   );
// };

// export default Trending;
