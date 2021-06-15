import React from "react";

const namePokemon = "Pikachu";

let Bestpokemon = ({abilities}) => {
    return( 
    <>
    <p><h1>My favorite pokemon is {`${namePokemon} :D <3`} </h1></p>
    <ul>
    {abilities.map((ability,index) => <li key={index}>{ability} {index}</li>)}
    </ul>
    </>
    )
  };

  export default Bestpokemon;