import React from "react";
import Search from "../search/search.component";
import propTypes from "prop-types";
import "./header.style.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="left-col">
          <Search
            searchByName={props.searchByName}
            placeholder="type name..."
          />
        </div>
        <div className="right-col">
          <button name="order" onClick={() => props.orderBy("name", "asc")}>
            a+
          </button>
          <button name="order" onClick={() => props.orderBy("name", "desc")}>
            z-
          </button>
          <button name="order" onClick={() => props.orderBy("number", "asc")}>
            n+
          </button>
          <button name="order" onClick={() => props.orderBy("number", "desc")}>
            n-
          </button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  orderBy: propTypes.func,
};

export default Header;
