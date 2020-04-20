import React from "react";
import CardsList from "../../components/cards-list/cards-list.component";
import Header from "../../components/header/header.component";
import propTypes from "prop-types";
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
    fetch("https://gabri3lmarques.github.io/pokemon/files/data.json")
      .then((response) => response.json())
      .then((response) => this.setState({ pokemons: response }));
  }

  // ordena o array de pokemons por ordem alfabética de a para z
  sortByA = () => {
    const pokemonsByname = this.state.pokemons;
    pokemonsByname.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ pokemons: pokemonsByname });
  };

  // ordena o array de pokemons por ordem alfabética de z para a
  sortByZ = () => {
    const pokemonsByname = this.state.pokemons;
    pokemonsByname.sort(function (b, a) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState({ pokemons: pokemonsByname });
  };

  // ordena o array de pokemons por ordem numérica crescente
  sortBySmallNumber = () => {
    const pokemonsBynumber = this.state.pokemons;
    pokemonsBynumber.sort(function (a, b) {
      return a.number - b.number;
    });
    this.setState({ pokemons: pokemonsBynumber });
  };

  // ordena o array de pokemons por ordem numérica decrescente
  sortByBigNumber = () => {
    const pokemonsBynumber = this.state.pokemons;
    pokemonsBynumber.sort(function (b, a) {
      return a.number - b.number;
    });
    this.setState({ pokemons: pokemonsBynumber });
  };

  // pega as palavras digitadas no componente Search
  // redefine o valor da propriedade searchword no estado da aplicação
  searchByName = (e) => {
    this.setState({ searchWord: e.target.value });
  };

  render() {
    console.log(propTypes);
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
        <p>{this.props.nome}</p>
        <Header
          searchByName={this.searchByName}
          sortByA={this.sortByA}
          sortByZ={this.sortByZ}
          sortBySmallNumber={this.sortBySmallNumber}
          sortByBigNumber={this.sortByBigNumber}
        />
      </div>
    );
  }
}

Home.propTypes = {
  pokemons: propTypes.array,
  searchWord: propTypes.string,
};

export default Home;
