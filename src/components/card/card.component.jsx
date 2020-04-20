import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import propTypes from "prop-types";
import "./card.style.css";

const Card = ({ pokemon }) => {
  return (
    <div className={`card ${pokemon.type[0]}`}>
      <p className="number">#{pokemon.number}</p>
      <h3 className="name">{pokemon.name}</h3>
      <div className="image-detalis">
        <div className="button">
          <Link to={`/profile/${pokemon.number}`}>
            <Button text="detalis" />
          </Link>
        </div>
        <div className="image">
          <img
            src={pokemon.sprite}
            alt={`avatar of the pokemon ${pokemon.name}.`}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: propTypes.object,
};

export default Card;
