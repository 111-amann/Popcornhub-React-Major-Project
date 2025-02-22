import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col md:gap-5 gap-3 items-center md:p-10 sm:p-5 p-3 w-full">
      <div className="flex justify-center items-center">
          <div className="logo inline-block">
            <img
              className="xl:w-[3vw] lg:w-[4vw] md:w-[5vw] sm:w-[6vw] w-[9vw] inline-block"
              src="/popcornhublogo.png"
              alt=""
            />
          </div>
          <h1 className="md:text-2xl text-xl font-bold text-white relative">
            <span className="py-1 tracking-tight">
              Popcorn
              <span className="bg-yellow-500 rounded-sm text-black p-[2px] ml-[3px]">
                hub
              </span>
            </span>
          </h1>
        </div>

      <Link className="md:text-lg text-md">📷 Instagram: [Your Instagram Handle]</Link>
      <Link className="md:text-lg text-md">💼 LinkedIn: [Your LinkedIn profile]</Link>
      <Link className="md:text-lg text-md">🐦 Twitter (X): [Your Twitter Handle]</Link>
      <Link className="md:text-lg text-md">👨‍💻 GitHub: [Your GitHub profile]</Link>
      <Link
        to="/"
        className="md:px-5 md:py-2 md:mt-5 sm:px-3 sm:py-2 sm:mt-3 px-2 py-1 mt-2 bg-yellow-500 rounded-lg text-black hover:bg-yellow-400"
      >
        Go Back
      </Link>
    </div>
  );
};

export default Contact;
