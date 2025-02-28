import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const tvdetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300; // Adjust for smooth scroll
      scrollContainer.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0,.2),rgba(0, 0, 0,.3),rgba(0, 0, 0,.6)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen md:px-5 px-1 overflow-auto relative"
    >
      {/* Part 1 Navigation */}
      <nav className="w-full text-zinc-200 flex md:gap-10 sm:gap-5 gap-3 items-center sm:text-md md:text-lg text-sm drop-shadow-lg bg-transparent bg-white/10 sm:mt-4 mt-2 py-2 px-2">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md hover:bg-yellow-500 hover:drop-shadow-2xl transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm static"
        ></i>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill hover:text-zinc-100 hover:drop-shadow-2xl"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
        >
          <i className="ri-earth-fill hover:text-zinc-100 hover:drop-shadow-2xl"></i>
        </a>
        <a
          className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter font-semibold"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDb
        </a>
      </nav>

      {/* Part 2 Film Details */}
      <div className="w-full flex md:p-8 sm:p-5 p-2">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt="banner"
          className="md:h-[50vh] sm:h-[33vh] h-[30vh] object-contain rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)]"
        />

        <div className="content md:ml-20 sm:ml-10 ml-3 sm:w-auto w-[60%]">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-4xl text-2xl font-black">
            {info.detail.title ||
              info.detail.original_title ||
              info.detail.name ||
              info.detail.original_name}{" "}
            <span className="md:text-lg sm:text-md text-sm font-semibold text-zinc-200">
              (
              {(info.detail.release_date?.split("-")[0] ||
                info.detail.first_air_date?.split("-")[0]) ??
                "N/A"}
              )
            </span>
          </h1>

          <div className="flex items-center sm:gap-5 gap-3 sm:mt-5 mt-3 sm:mb-5 mb-3 sm:flex-nowrap flex-wrap">
            <h1 className="flex items-center gap-1">
              <span className="xl:w-[3vw] xl:h-[3vw] md:w-[3vw] md:h-[3vw] sm:w-[6vw] sm:h-[6vw] w-[7vw] h-[7vw] bg-yellow-500 rounded-full flex justify-center items-center font-semibold lg:text-sm md:text-xs sm:text-sm text-[12px]">
                {(info.detail.vote_average * 10).toFixed()}
                <sup>%</sup>
              </span>
              <span className="w-[50px] sm:leading-5 leading-3 md:text-xl sm:text-lg text-sm font-semibold">
                User Score
              </span>
            </h1>
            <h1 className="md:text-md sm:text-sm text-xs">
              {info.detail.release_date || info.detail.first_air_date}
            </h1>
            <h1 className="md:text-md sm:text-sm text-xs">
              {info.detail.genres.map((g) => g.name).join(",")}
            </h1>
          </div>

          <h1 className="md:text-2xl sm:text-lg text-md font-semibold italic text-zinc-200 md:block hidden">
            {info.detail.tagline}
          </h1>
          <h1 className="md:text-2xl sm:text-xl text-lg font-semibold mt-2 mb-1 md:block hidden">
            Overview
          </h1>
          <p className="md:text-md sm:text-xs text-sm text-zinc-200 leading-6 md:block hidden">
            {info.detail.overview}
          </p>
          <h1 className="md:text-2xl sm:text-xl text-lg font-semibold mt-2 mb-1 md:block hidden">
            tv Translated
          </h1>
          <p className="md:text-md sm:text-xs text-sm  text-zinc-200 leading-4.5 md:block hidden mb-8">
            {info.translations.join(" , ")}
          </p>

          <Link
            to={`${pathname}/trailer`}
            className="md:px-4 md:py-3 sm:px-3 px-2 sm:py-2 py-2 bg-yellow-500 hover:bg-yellow-400 duration-300 rounded lg:mt-5 md:mt-0 mt-3 md:text-sm sm:text-xs text-[10px] font-semibold text-black"
          >
            <i className="ri-play-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Responsive div Film Details*/}
      <div className="md:hidden block p-3">
        <h1 className="md:text-xl sm:text-lg text-md font-semibold italic text-zinc-200">
          {info.detail.tagline}
        </h1>
        <h1 className="text-lg font-semibold mt-2">Overview</h1>
        <p className="text-xs text-zinc-200">{info.detail.overview}</p>
        <h1 className="text-lg font-semibold mt-2">tv Translated</h1>
        <p className="text-xs text-zinc-200">{info.translations.join(", ")}</p>
      </div>

      {/* part 3 Available on Platforms */}
      <div className="w-80 md:flex hidden flex-col px-8 absolute bottom-[30%]">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available on Platforms:</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt="banner"
                className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="mt-5 flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available on rent:</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt="banner"
                className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="mt-5 flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available to Buy:</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                title={w.provider_name}
                key={i}
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt="banner"
                className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
              />
            ))}
          </div>
        )}
      </div>

      {/* Part 4 Seasons */}
      <div className="lg:mt-32 md:mt-20 mt-5">
        <div className="underline w-full h-[1px] bg-zinc-500 mb-4"></div>
        <h1 className="text-2xl font-semibold p-2 ml-4">Seasons</h1>
        <div className="w-full h-auto sm:px-5 px-1 flex gap-3 overflow-x-auto flex-nowrap">
          {info.detail.seasons.length > 0 ? (
            info.detail.seasons.map((item, i) => (
              <div key={i} className="lg:w-[15%] sm:w-[25%] w-[45%] rounded-lg">
                <div className="lg:min-w-[15%] sm:min-w-[25%] min-w-[45%] sm:h-[60vh] h-[45vh] card bg-zinc-900 sm:p-2 p-0 sm:mb-2 flex flex-col items-center justify-center rounded-lg hover:bg-zinc-600 duration-300 shadow-[6px_13px_25px_2px_rgba(0,0,0,.5)] hover:shadow-[6px_13px_25px_2px_rgba(0,0,0,.2)]">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt="banner"
                    className="sm:w-full w-[80%] h-[65%] object-cover rounded-md shadow"
                  />
                  <h1 className="sm:text-lg text-md font-semibold sm:mt-2 mt-[2px]">
                    {item.name}
                  </h1>
                  <p className="text-zinc-300 sm:text-sm text-xs sm:px-0 px-2">
                    {item.overview.slice(0, 35)}...
                    <Link className="text-zinc-400">More</Link>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-xl text-zinc-400 font-semibold text-center mt-5">
              Nothing to Show
            </h1>
          )}
        </div>
      </div>

      {/* Part 5 Recommendations and similar stuff */}
      <div className="lg:mt- md:mt-20 mt-5">
        <div className="underline w-full h-[1px] bg-zinc-500 mb-4"></div>
        <h1 className="text-2xl font-semibold p-2 ml-4">
          Recommendations & Similar
        </h1>
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default tvdetails;
