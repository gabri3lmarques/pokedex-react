import React from "react";
import Card from "../card/card.component";
import propTypes from "prop-types";
import "./cards-list.style.css";

const CardsList = ({ pokemons }) => {
  return (
    <div className="cards-list">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.number} pokemon={pokemon} />
      ))}
    </div>
  );
};

CardsList.propTypes = {
  pokemons: propTypes.array,
};

export default CardsList;
