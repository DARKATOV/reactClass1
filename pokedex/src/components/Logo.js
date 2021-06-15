import React from "react";

function Logo() {
    const appName = "Pokedex";
    return (
      <div>
        <h1>
          Welcome to {appName}
        </h1>
        <img
        alt = "pokemonImage"
        src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png">
        </img>
      </div>
    );
  };

export default Logo;