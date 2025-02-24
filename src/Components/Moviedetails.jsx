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
          class="hover:text-zinc-100 hover:drop-shadow-2xl"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex p-8">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.poster_path || info.detail.backdrop_path
            }`}
            alt="banner"
            className="h-[40vh] object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)]"
          />

          <div className="mt-5 flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available on Platforms:</h1>
            {info.watchproviders &&
              info.watchproviders.flatrate &&
              info.watchproviders.flatrate.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="banner"
                  className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
                />
              ))}
          </div>
          <div className="mt-5 flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available on Rent:</h1>
            {info.watchproviders &&
              info.watchproviders.rent &&
              info.watchproviders.rent.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="banner"
                  className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
                />
              ))}
          </div>
          <div className="mt-5 flex gap-3 w-80 flex-wrap items-center">
            <h1 className="text-sm text-zinc-300">Available to Buy:</h1>
            {info.watchproviders &&
              info.watchproviders.buy &&
              info.watchproviders.buy.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt="banner"
                  className="h-[3.5vh] object-cover rounded-md shadow-white/10 hover:shadow-[1px_2px_2px_1px_rgba(0,0,0,.5)]"
                />
              ))}
          </div>
        </div>

        <div className="content">
          <h1 className="xl:text-5xl sm:text-4xl text-2xl font-black">
            {info.detail.title ||
              info.detail.original_title ||
              info.detail.name ||
              info.detail.original_name}{" "}
            <span className="text-lg font-semibold text-zinc-300">
              (
              {info.detail.release_date.split("-")[0] ||
                info.detail.first_air_date.split("-")[0]}
              )
            </span>
          </h1>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
