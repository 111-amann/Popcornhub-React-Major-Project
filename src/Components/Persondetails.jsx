import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./templates/HorizontalCards";

const Personetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="w-screen h-screen md:px-5 px-1 overflow-auto relative">
      {/* Part 1 Navigation */}
      <nav className="w-full text-zinc-200 flex md:gap-10 sm:gap-5 gap-3 items-center sm:text-md md:text-lg text-sm drop-shadow-lg sm:mt-4 mt-2 py-2 px-2">
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line bg-gray-800 text-white p-1 md:p-2 rounded-full lg:shadow-lg md:shadow-md hover:bg-yellow-500 hover:drop-shadow-2xl transition lg:mr-5 md:mr-2 mr-1 sm:text-md md:text-lg text-sm static"
        ></i>
      </nav>

      <div className="w-full flex flex-col">
        {/* Partr 2 Poster and Detail */}
        <div className="w-full md:p-8 sm:p-5 p-2">
          <img
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt="banner"
            className="md:h-[50vh] sm:h-[33vh] h-[30vh] object-contain rounded-md shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] hover:shadow-[8px_17px_38px_2px_rgba(0,0,0,.2)] mb-8"
          />
          <div className="underline w-[17%] h-[1px] bg-zinc-500 mb-4"></div>

        {/* Social Media Links */}
          <div className="text-2xl flex gap-5">
            {info.externalid.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
              >
                <i class="ri-instagram-line"></i>
              </a>
            )}
            {info.externalid.facebook_id && (
              <a
                class="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://www.facebook.com/${info.externalid.facebook_id}/`}
              >
                <i class="ri-facebook-line"></i>
              </a>
            )}
            {info.externalid.twitter_id && (
              <a
                class="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://x.com/${info.externalid.twitter_id}/`}
              >
                <i class="ri-twitter-x-line"></i>
              </a>
            )}
            {info.externalid.youtube_id && (
              <a
                class="hover:text-zinc-100 hover:drop-shadow-2xl tracking-tighter"
                target="_blank"
                href={`https://www.youtube.com/@${info.externalid.youtube_id}/`}
              >
                <i class="ri-youtube-line"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Personetails;
