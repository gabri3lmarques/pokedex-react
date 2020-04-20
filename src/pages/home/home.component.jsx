import React from "react";
import { URI } from "../../env";
import CardsList from "../../components/cards-list/cards-list.component";
import Header from "../../components/header/header.component";
import propTypes from "prop-types";
import _ from "lodash";
import "./home.style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchWord: "",
    };
  }

  componentDidMount() {
    fetch(`${URI}data.json`)
      .then((response) => response.json())
      .then((response) => this.setState({ pokemons: response }));
  }

  searchByName = (e) => {
    this.setState({ searchWord: e.target.value });
  };

  setPokemons(pokemons) {
    this.setState({ ...this.state, pokemons });
  }

  orderBy = (column, direction) => {
    this.setPokemons(_.orderBy(this.state.pokemons, [column], [direction]));
  };

  render() {
    const { pokemons, searchWord } = this.state;
    const filteredByName = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <div className="container">
          <CardsList pokemons={filteredByName} />
        </div>
        <Header searchByName={this.searchByName} orderBy={this.orderBy} />
      </div>
    );
  }
}

Home.propTypes = {
  pokemons: propTypes.array,
  searchWord: propTypes.string,
};

export default Home;
