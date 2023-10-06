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
      <div className="searchBar">
        <input
          className="searchText"
          type="text"
          placeholder="Search"
          value={value}
          onChange={(event) => {
            const updatedValue = event.target.value; // Get the updated value
            setValue(updatedValue); // Update the state with the new value
            props.handleValue(updatedValue); // Pass the updated value to the prop function
          }}
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          onClick={handleClick}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <select className="dd">
        <option>Relevance</option>
      </select>
      <select className="dd">
        <option>All Brands</option>
      </select>
    </div>
  );
};

export default SearchBar;
