import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import propTypes from "prop-types";
import "./profile.style.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      isOpen: true,
    };
  }

  // faz a chamada que busca os dados individual de um determinao pokemon
  componentDidMount() {
    fetch(
      `https://gabri3lmarques.github.io/pokemon/files/${this.props.match.params.number}/data.json`
    )
      .then((response) => response.json())
      .then((response) => this.setState({ pokemon: response }));
  }

  //pega o ultimo valor da prop isOpen
  //redefine essa prop pelo seu oposto
  toggle = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  render() {
    // cria uma cópia da prop pokemon do estado
    const { pokemon } = this.state;
    return (
      <div className={`profile ${pokemon.type ? pokemon.type[0] : ""}`}>
        <div className="container">
          <Link to="/">
            <Button text="home" />
          </Link>
          <h2 className="name">{pokemon.name}</h2>
          <p className="number">#{pokemon.number}</p>
          <div className="types">
            {pokemon.type
              ? pokemon.type.map((item, index) => (
                  <span key={index}>{item}</span>
                ))
              : ""}
          </div>
          <div className="image">
            <img
              src={pokemon.sprite}
              alt={`Profile avatar pokemon of the pokemon ${pokemon.name}`}
            />
          </div>
        </div>
        <div className="sub-section">
          <div className="container">
            <Accordion className="accordion" defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="0">
                    About
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>{pokemon.about}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    className="teste"
                    variant="link"
                    eventKey="1"
                  >
                    Special Ability
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {pokemon.specialAbility ? (
                      <p className="abilitie">
                        <b>{pokemon.specialAbility[0]}:</b>
                        {pokemon.specialAbility[1]}
                      </p>
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    className="teste"
                    variant="link"
                    eventKey="2"
                  >
                    Genders
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {pokemon.genders ? (
                      <p className="genders">
                        {pokemon.genders.map((gender, index) => (
                          <span key={index} className={gender}></span>
                        ))}
                      </p>
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    className="teste"
                    variant="link"
                    eventKey="3"
                  >
                    Height
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>{pokemon.height}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    className="teste"
                    variant="link"
                    eventKey="4"
                  >
                    Weight
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    <p>{pokemon.weight}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  pokemon: propTypes.object,
  isOpen: propTypes.bool,
};

export default Profile;
