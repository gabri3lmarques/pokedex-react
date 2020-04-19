import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import "./card.style.css";

const Card = ({ pokemon }) => {
  return (
    <div className={`card ${pokemon.type[0]}`}>
      <p className="number">#{pokemon.number}</p>
      <h3 className="name">{pokemon.name}</h3>
      <div className="image-detalis">
        <div className="button">
          <Link to={`/profile/${pokemon.number}`}>
            <Button text="Details" />
          </Link>
        </div>
        <div className="image">
          <img
            src={pokemon.sprite}
            alt={`avatar do pokemon ${pokemon.name}.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;