import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";

const Personetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="w-screen h-screen md:px-5 px-1 overflow-auto relative">
      {/* Part 1 Navigation */}
      <nav className="w-full text-zinc-200 flex md:gap-10 sm:gap-5 gap-3 items-center sm:text-md md:text-lg text-sm drop-shadow-lg sm:mt-4 mt-2 py-1 px-2">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md hover:bg-yellow-500 hover:drop-shadow-2xl transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm static"
        ></i>
      </nav>

      <div className="w-full flex">
        {/* Part 2 Poster and Detail */}
        <div className="w-[20%] md:px-8 md:py-5 sm:p-5 p-2 md:block hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt="banner"
            className="lg:h-[50vh] md:h-[35vh] object-cover rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)] md:mb-8 mb-3"
          />
          <div className="underline lg:w-[65%] md:w-[70%] w-[80%] h-[1px] bg-zinc-500 md:mb-4 mb-1"></div>

          {/* Social Media Links */}
          <div className="sm:text-2xl flex sm:gap-5 gap-2">
            {info.externalid.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
              >
                <i className="ri-instagram-line"></i>
              </a>
            )}
            {info.externalid.facebook_id && (
              <a
                className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
              >
                <i className="ri-facebook-line"></i>
              </a>
            )}
            {info.externalid.twitter_id && (
              <a
                className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://x.com/${info.externalid.twitter_id}/`}
              >
                <i className="ri-twitter-x-line"></i>
              </a>
            )}
            {info.externalid.youtube_id && (
              <a
                className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://www.youtube.com/@${info.externalid.youtube_id}/`}
              >
                <i className="ri-youtube-line"></i>
              </a>
            )}
          </div>

          {/* Personal Information */}
          <div>
            <h1 className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold mt-3">
              Personal Info
            </h1>
            <h1 className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold mt-2 mb-1">
              Known for : {info.detail.known_for_department}
            </h1>
            <h1 className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold mb-1">
              Birthday : {info.detail.birthday}
            </h1>
            {info.detail.deathday && (
              <h1 className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold mb-1">
                Deathday : {info.detail.deathday}
              </h1>
            )}
            {info.detail.place_of_birth && (
              <h1 className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold mb-1">
                Place of Birth : {info.detail.place_of_birth}
              </h1>
            )}
            {info.detail.also_known_as && (
              <h1 className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold mb-1 lg:block hidden">
                Also known as : {info.detail.also_known_as.join(" ,")}
              </h1>
            )}
          </div>
        </div>

        {/* part 3 Details and Information */}
        <div className="detail md:w-[80%] md:pl-10">
          {/* Responsive div */}
          <div className="md:hidden block px-4 flex flex-col">
            <h1 className="text-zinc-400 text-3xl font-black  mb-3">
              {info.detail.name}
            </h1>
            <img
              src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
              alt="banner"
              className="sm:h-[60vh] h-[40vh] object-cover rounded-md sm:shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] sm:hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)] md:mb-8 sm:mb-5 mb-3"
            />
            <div className="underline w-full h-[1px] bg-zinc-500 md:mb-4 sm:mb-2 mb-1"></div>
            <div className="sm:text-2xl flex sm:gap-5 gap-2">
              {info.externalid.instagram_id && (
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
                >
                  <i className="ri-instagram-line"></i>
                </a>
              )}
              {info.externalid.facebook_id && (
                <a
                  className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                  target="_blank"
                  href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
                >
                  <i className="ri-facebook-line"></i>
                </a>
              )}
              {info.externalid.twitter_id && (
                <a
                  className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                  target="_blank"
                  href={`https://x.com/${info.externalid.twitter_id}/`}
                >
                  <i className="ri-twitter-x-line"></i>
                </a>
              )}
              {info.externalid.youtube_id && (
                <a
                  className="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                  target="_blank"
                  href={`https://www.youtube.com/@${info.externalid.youtube_id}/`}
                >
                  <i className="ri-youtube-line"></i>
                </a>
              )}
            </div>
            <h1 className="text-zinc-400 text-2xl font-semibold mt-2">
              Personal Info
            </h1>
            <h1 className="text-zinc-400 text-sm font-semibold mt-1 mb-1">
              Known for : {info.detail.known_for_department}
            </h1>
            <h1 className="text-zinc-400 text-sm font-semibold mb-1">
              Birthday : {info.detail.birthday}
            </h1>
            {info.detail.deathday && (
              <h1 className="text-zinc-400 text-sm font-semibold mb-1">
                Deathday : {info.detail.deathday}
              </h1>
            )}
            {info.detail.place_of_birth && (
              <h1 className="text-zinc-400 text-sm font-semibold mb-1">
                Place of Birth : {info.detail.place_of_birth}
              </h1>
            )}
            {info.detail.also_known_as && (
              <h1 className="text-zinc-400 text-sm font-semibold mb-1">
                Also known as : {info.detail.also_known_as.join(" ,")}
              </h1>
            )}
          </div>

          <div className="p-4 sm:p-0">
            <h1 className="text-zinc-400 text-5xl font-black sm:mt-2 mt-1 mb-1 md:block hidden">
              {info.detail.name}
            </h1>
            {info.detail.biography && (
              <div className="md:pl-5">
                <h1 className="text-zinc-400 lg:text-2xl md:text-xl text-2xl font-semibold mt-5 sm:px-4 md:px-0">
                  Biography
                </h1>
                <p className="text-zinc-400 lg:text-md md:text-sm text-xs font-semibold sm:mt-2 mt-1 mb-1 sm:px-4 md:px-0">
                  {info.detail.biography}
                </p>
              </div>
            )}

            <div className="md:block hidden">
              <h1 className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold mt-10 mb-3 pl-5">
                Movies / TV Shows
              </h1>
              <HorizontalCards data={info.combinedCredits.cast} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:mt-32 mt-10 ml-5 items-center justify-between pr-5">
        <h1 className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold mt-5">
          Movies / TV Shows and Roles
        </h1>
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="list-disc text-zinc-400 h-[50vh] m-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.2)] border-2 border-zinc-700 p-5">
        {info[category + "Credits"].cast.map((c, i) => (
          <li
            key={i}
            className="hover:text-white p-5 rounded hover:bg[#19191d] duration-300 cursor-pointer"
          >
            <Link to={`/${category}/details/${c.id}}`}>
              <span>
                {category.toUpperCase()} :{" "}
                {c.name || c.title || c.original_title || c.original_name}
              </span>
              <span className="block pl-6">
                Role Palyed : {c.character ? c.character : "-"}
              </span>
            </Link>
          </li>
        ))}
      </div>

      <div className="md:hidden block w-[99%]">
        <h1 className="text-zinc-400 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold mt-10 mb-3 pl-5">
          Movies / TV Shows
        </h1>
        <HorizontalCards data={info.combinedCredits.cast} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Personetails;
