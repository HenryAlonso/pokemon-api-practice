import React, {useEffect ,useState} from 'react';
import axios from 'axios';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    
        useEffect(() => {
            const fetchPokemon = async () => {
                try {
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
                    const data = await response.json();
                    setPokemonList(data.results);
                } catch (error) {
                    console.error('Error fetching Pokemon')
                }
            };
    
            fetchPokemon();
        },    []
        ); 
        

    return (
        <div>
            <h1>Pokemon List With Axios</h1>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;