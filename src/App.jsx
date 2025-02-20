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

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] text-white flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
