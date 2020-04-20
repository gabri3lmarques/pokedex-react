import React from "react";
import propTypes from "prop-types";
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

Search.propTypes = {
  searchByName: propTypes.func,
  placeholder: propTypes.string,
};

export default Search;
