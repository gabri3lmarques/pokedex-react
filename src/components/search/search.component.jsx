import React from "react";
import "./search.style.css";

const Search = (props) => {
  return (
    <input
      onChange={props.searchByName}
      type="text"
      className="search"
      placeholder={props.placeholder}
    />
  );
};

export default Search;
