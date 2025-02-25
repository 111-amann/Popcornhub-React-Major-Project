import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const Moviedetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, []);
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
      className="w-screen h-screen md:px-5 px-1"
    >
      <nav className="w-full text-zinc-200 flex md:gap-10 sm:gap-5 gap-3 items-center sm:text-md md:text-lg text-sm drop-shadow-lg bg-transparent bg-white/10 sm:mt-4 mt-2 py-2 px-2">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md hover:bg-yellow-500 hover:drop-shadow-2xl transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm static"
        ></i>
        <a target="_blank" href={info.detail.homepage}>
          <i class="ri-external-link-fill hover:text-zinc-100 hover:drop-shadow-2xl"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}/`}
        >
          <i class="ri-earth-fill hover:text-zinc-100 hover:drop-shadow-2xl"></i>
        </a>
        <a
          class="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter font-semibold"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDb
        </a>
      </nav>

      <div className="w-full flex md:p-8 sm:p-5 p-2">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt="banner"
          className="md:h-[50vh] sm:h-[33vh] h-[30vh] object-contain rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)]"
        />
        <div className="content md:ml-20 sm:ml-10 ml-3 sm:w-auto w-[60%]">
          <h1 className="xl:text-5xl sm:text-4xl text-2xl font-black">
            {info.detail.title ||
              info.detail.original_title ||
              info.detail.name ||
              info.detail.original_name}{" "}
            <span className="md:text-lg sm:text-md text-sm font-semibold text-zinc-200">
              (
              {info.detail.release_date.split("-")[0] ||
                info.detail.first_air_date.split("-")[0]}
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
            <h1 className="md:text-md sm:text-sm text-xs">
              {info.detail.runtime}min
            </h1>
          </div>

          <h1 className="md:text-xl sm:text-lg text-md font-semibold italic text-zinc-200 sm:block hidden">
            {info.detail.tagline}
          </h1>
          <h1 className="md:text-2xl sm:text-xl text-lg font-semibold mt-4 mb-1 sm:block hidden">
            Overview
          </h1>
          <p className="sm:text-md text-sm text-zinc-200 leading-6 sm:block hidden">
            {info.detail.overview}
          </p>
          <h1 className="md:text-2xl sm:text-xl text-lg font-semibold mt-4 mb-1 sm:block hidden">
            Movie Translated
          </h1>
          <p className="sm:text-md text-sm text-zinc-200 leading-4.5 sm:block hidden">
            {info.translations.join(" , ")}
          </p>
        </div>
      </div>

      {/* Responsive div */}
      <div className="sm:hidden block p-3">
        <h1 className="md:text-xl sm:text-lg text-md font-semibold italic text-zinc-200">
          {info.detail.tagline}
        </h1>
        <h1 className="text-lg font-semibold mt-2">Overview</h1>
        <p className="text-xs text-zinc-200">{info.detail.overview}</p>
        <h1 className="text-lg font-semibold mt-2">Movie Translated</h1>
        <p className="text-xs text-zinc-200">{info.translations.join(", ")}</p>
      </div>

      <div className="w-80 md:flex hidden flex-col px-8">
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
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
