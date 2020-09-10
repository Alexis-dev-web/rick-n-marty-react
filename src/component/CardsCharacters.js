import React,  { useState, useEffect } from "react";
import "./Box.css";
import { Card, Button, Alert } from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const CardsCharacters = () => {
  let location = useLocation();
  let name = location.search.split('=')[1];
  // let id = location.search.split('=')[1];
  const [hasError, setErrors] = useState(false);
  const [characters, setCharacters] = useState([]);

  function fetchData() {
    let res = '';
    if(location.search == '' || (name == '' && name == null)) {
      res = fetch("https://rickandmortyapi.com/api/character/");
    } else {
      res = fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    }    
    res.then( response => response.json())
        .then(res => setCharacters(res.results))
        .catch(err => setErrors(err));
  }
  
  function openCharacter(id) {
    this.props.history.push('/Features');
  }

  function senctionCard () {
      fetchData();
      if(characters != undefined) {
        return (<section className="container-fluid"> 
        <h3 className="font-weight-bold text-success text-center mt-3"><strong>Characters Rick and Morty</strong></h3>
        <div className="row col-12 mx-auto mt-4 form-inline my-auto">{characters.map(renderCard)}</div></section>)
      } else {
        return (<section className="container-fluid"> 
        <h3 className="font-weight-bold text-success text-center mt-3"><strong>Characters Rick and Morty</strong></h3>
        <div className="row col-12 mx-auto mt-4 form-inline my-auto align-content-center"> 
        <Alert className="col-12 mx-auto text-center align-content-center" variant="danger">
          Oh! There aren't characters with that name
        </Alert>
        </div></section>)
      }
   
  }

  const renderSwitch = (status) => {
    switch(status) {
      case 'unknown':
        return <div className="mt-2 rounded-circle mr-1"  style={{background: "rgb(158, 158, 158)", width: ".5rem", height: ".5rem"}}></div>;
      case 'Alive': 
        return (<div className="mt-2 rounded-circle mr-1"  style={{background: "#63E318", width: ".5rem", height: ".5rem"}}></div>);
        case 'Dead': 
        return <div className="mt-2 rounded-circle mr-1"  style={{background: "#F23C02", width: ".5rem", height: ".5rem"}}></div>;
      default:
        return '';
    }
  }
  
  const renderCard = (character, index) => {  
    return (
      <div className="mx-auto col-lg-6 col-md-6 col-12 col-xl-3 mb-3 mt-3"> 
      <Card key={index} className="bg-dark shadow">
        <Card.Img variant="top" src={character.image} />
        <Card.Body>
          <h5 className="font-weight-bold text-info mx-0">{character.name}</h5>
          <div className="row col-12 text-left">
            {renderSwitch(character.status)}
            <p className="text-light">{character.status} - {character.species}</p>
          </div>
          <div className="text-light col-12 row text-left">
          <p style={{fontSize: "12px"}}> <span className="text-muted">Origin: </span> <strong>{character.origin.name}</strong></p>
          </div>
          <div className="text-light col-12 row text-left">
            <p style={{fontSize: "12px"}}> <span className="text-muted">Location: </span> <strong>{character.location.name}</strong></p>
          </div>
          <div className="col-12 mt-xl-2 mt-lg-4 mt-md-4 mt-2">
            <Link to={`/Features?id=${character.id}`} className="btn btn-outline-light float-right">More</Link>
            {/* <button className="btn rounded float-right" color="#ffffff" onClick={() => openCharacter(character.id)}>Ver más</button> */}
          </div>
        </Card.Body>
      </Card>
      </div>
    );
  };

  return senctionCard();
};

export default CardsCharacters;
