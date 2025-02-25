import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/movies";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Moviedetails from "./Components/Moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Persondetails from "./Components/Persondetails";
import Trailer from "./Components/templates/Trailer";
import Notfound from "./Components/Notfound";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] text-white flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tv" element={<Tvshows />} />
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
