import React from "react";
import Search from "../search/search.component";
import Button from "../button/button.component";
import "./header.style.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="left-col">
          <Search searchByName={props.searchByName} placeholder="name..." />
        </div>
        <div className="right-col">
          <button onClick={props.sortByA} text="A+">
            a+
          </button>
          <button onClick={props.sortByZ} text="A+">
            z-
          </button>
          <button onClick={props.sortBySmallNumber} text="N+">
            n+
          </button>
          <button onClick={props.sortByBigNumber} text="N+">
            n-
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
