import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] text-white p-10">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
