import { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "axios";
const HomePage = () => {
  const [pokeData, SetPokeData] = useState([]);
  const [url] = useState("https://pokeapi.co/api/v2/pokemon?limit=300");

  const Pokedata = async () => {
    const res = await axios.get(url);
    GetPokemon(res.data.results);
  };

  const GetPokemon = async (res) => {
    try {
      const pokemonDataArray = await Promise.all(
        res.map(async (item) => {
          const result = await axios.get(item.url);
          return result.data;
        })
      );

      SetPokeData((prev) => [...prev, ...pokemonDataArray]);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    Pokedata();
  }, []);

  return (
    <div>

      <PokemonCard data={pokeData} />
    </div>
  );
};

export default HomePage;
