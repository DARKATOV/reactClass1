import React, {useState} from "react";

const pokeList = ["Pikachu","Onix","Starmie","Gastly"];

let CaughtPokemon = ({date}) => {
          // uso de llaves para escribir JS en JSX
    const [caught, setCaught] = useState([])
    const [getPokemon, setGetPokemon] = useState(pokeList)
    // let date = new Date().toLocaleDateString()
    function catchPokemon(){
        const randomNumber = Math.floor(Math.random()*897)
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const pokemonName = data.name.charAt(0).toUpperCase()+data.name.slice(1)
                console.log(pokemonName);
                setGetPokemon([pokemonName, ...getPokemon])
                console.log(getPokemon)
            })
            .catch(err => console.log(err))
    }
    return (
    <>
    <p>
        <h3>Caught {caught.length} Pokemon on {`${date}`}</h3>
    </p>
    <hr></hr>
    <button onClick={() => {setCaught(caught+1)}}>
        CatchPokemon
    </button>
    <hr></hr>
    <p> Friends Pokemons</p>
    <ul>
        {getPokemon.map((pokemon,index) => (
            <li key={index}>{pokemon}</li>
        ))}
    </ul>
    <button onClick={catchPokemon}>Cath a new pokemon </button>
    </>
    )
};

export default CaughtPokemon