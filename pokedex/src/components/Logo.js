import React from "react";

function Logo(props) {
  return (
    <div>
      <h1>
        Welcome to {props.appName}
      </h1>
      <img
      alt = "pokemonImage"
      src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      onClick = {props.hangClick/* {logWhenClicked()cuando tiene los aprentesis ya no hace referencia a la funcion sino la ejecta una sola vez y listo*/}> 
      </img>
    </div>
    );
  };

export default Logo;

