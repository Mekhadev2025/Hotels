import React, { useState } from "react";
import "../SearchBar/SearchBar.css";
import data from "../../data";

const SearchBar = (props) => {
  // const [value, setValue] = useState(""); // Initialize with an empty string
  const [selected, setSelected] = useState(null);

  // const handleClick = () => {
  //   props.handleValue(value);
  // };

  const handleCityClick = (city) => {
    setSelected(city);
  };

  return (
    <div className="srchContainer">
      <div className="citygroup">
        <button
          className="btn newYork"
          onClick={() => handleCityClick("New York")}
          style={{ background: selected === "New York" ? "#363AE3" : "#DEE0FA" ,color:selected === "New York" ? "white" : "black" }}
         
        >
          New York
        </button>
        <button
          className="btn mumbai"
          style={{ background: selected === "Mumbai" ? "#363AE3" : "#DEE0FA" ,color:selected === "Mumbai" ? "white" : "black"}}
          onClick={() => handleCityClick("Mumbai")}
        >
          Mumbai
        </button>
        <button className="btn paris" style={{ background: selected === "Paris" ? "#363AE3" : "#DEE0FA" ,color:selected === "Paris" ? "white" : "black"}}  onClick={() => handleCityClick("Paris")}>Paris</button>
        <button className="btn london" style={{ background: selected === "London" ? "#363AE3" : "#DEE0FA",color:selected === "London" ? "white" : "black" }}  onClick={() => handleCityClick("London")}>London</button>
      </div>
      <div className="viewAll">View All</div>
    </div>
  );
};

export default SearchBar;
