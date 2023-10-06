import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import Home from "./components/Home/Home";
import React, { useState } from "react";
function App() {
  const [value, setValue] = useState(null);
  const handleValue = (values) => {
    setValue(values);
    console.log("Hurray", value);
  };
  return (
    <>
      <BrowserRouter>
        <SearchBar handleValue={handleValue} />
        <Routes>
          <Route path="/" element={<Home values={value} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
