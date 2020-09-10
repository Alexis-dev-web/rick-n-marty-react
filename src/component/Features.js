import React,  { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";

const Features = () => {
  let location = useLocation();
  let id = location.search.split('=')[1];
  const [hasError, setErrors] = useState(false);
  const [character, setCharacter] = useState('');
  const [origin, setOrigin] = useState({});
  const [place, setPlace] = useState({});
  const [episode, setEpisode] = useState({});
  
    async function fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      res.json()
        .then(res => {
          setCharacter(res)
          setOrigin(res.origin)
          setPlace(res.location)
          setEpisode(res.episode)
        })
        .catch(err => setErrors(err));
    }
    
    useEffect(() => {
      fetchData();
    });
    return (<section className="container-fluid">
              <div className="panel shadow mt-3 rounded">
                  <div className="row mx-auto mt-2 align-content-center">
                    <div className="col-12 mx-auto mt-2">
                        <h3 className="font-weight-bold text-success text-center my-auto"><strong>About {character.name}</strong></h3>
                        </div>
                        <div className="col-12 mx-auto row">
                            <div className="mx-auto col-lg-4 col-md-3 col-12 mt-4 mb-4 text-center">
                                <img className="rounded-circle" src={character.image} />
                            </div>
                            <div className="col-lg-8 col-md-9 col-12 mt-4 text-left">
                                <div className="form-group ">
                                    <span className="text-light text-muted">Specie: </span>
                                    <span className="text-light"><strong>{character.species}</strong></span>
                                </div>
                                <div className="form-group">
                                    <span className="text-light text-muted">Gender: </span>
                                    <span className="text-light"><strong>{character.gender}</strong></span>
                                </div>
                                <div class="form-group">
                                    <span class="text-light text-muted">Origin: </span>
                                    <span class="text-light"><strong>{origin.name}</strong></span>
                                </div>
                                <div className="form-group">
                                    <span className="text-light text-muted">Status: </span>
                                    <span className="text-light"><strong>{character.status}</strong></span>
                                </div>
                                <div className="form-group">
                                    <span className="text-light text-muted">Location: </span>
                                    <span className="text-light"><strong>{place.name}</strong></span>
                                </div>
                                <div className="form-group">
                                    <span className="text-light text-muted">Number of episodes: </span>
                                    <span className="text-light"><strong>{episode.length}</strong></span>
                                </div>
                                <div className="col-12 mx-auto"> 
                                    <Link to={'/'} className="btn btn-outline-info text-color-button float-right mb-3" >Return</Link>
                                </div>
                              </div>
                            </div>
                        </div>
                  </div>
          </section>);
  };
  
  export default Features;