import React, { useState } from "react";
import "../SearchBar/SearchBar.css";
import data from "../../data";

const SearchBar = (props) => {
  const [value, setValue] = useState(""); // Initialize with an empty string

  const handleClick = () => {
    props.handleValue(value);
  };

  return (
    <div className="srchContainer">
      <div className="citygroup">
        <button className="btn newYork"></button>
        <button className="btn mumbai"></button>
        <button className="btn paris"></button>
        <button className="btn london"></button>
      </div>
     <div className="viewAll">View All  </div>
     
    </div>
  );
};

export default SearchBar;
