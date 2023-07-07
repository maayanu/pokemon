import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./PokemonPage.css";

function PokemonPage() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      let url = "https://pokeapi.co/api/v2/";
      let pokemons = await axios.get(url);
      setPokemons(pokemons.data);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container">
      <h1>Pokémon</h1>
      <input></input>
      <button>Search</button>
      {pokemons.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <img alt="pokemon img" src={item.url} />
          </div>
        );
      })}
    </div>
  )
}
export default PokemonPage;
