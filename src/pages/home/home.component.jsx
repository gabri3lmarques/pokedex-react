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

  // faz a chadamada que busca os dados de todos os pokemons da API
  componentDidMount() {
    fetch(`${URI}data.json`)
      .then((response) => response.json())
      .then((response) => this.setState({ pokemons: response }));
  }

  setPokemons(pokemons) {
    this.setState({ ...this.state, pokemons });
  }

  orderBy = (column, direction) => {
    this.setPokemons(_.orderBy(this.state.pokemons, [column], [direction]));
  };

  // pega as palavras digitadas no componente Search
  // redefine o valor da propriedade searchword no estado da aplicação
  searchByName = (e) => {
    this.setState({ searchWord: e.target.value });
  };

  render() {
    // cria duas constantes cópias do estado aplicação
    const { pokemons, searchWord } = this.state;

    // filtra o array de pokemons pela propriedade *name*
    // utiliza a palavra digitda em searchByName()
    // retorna um novo array já filtrado
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
