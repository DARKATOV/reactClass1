import logo from './logo.svg';
import './App.css';

let namePokemon = "pikachu";

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

const Bestpokemon = () =>   
  <p> My favorite pokemon is {`${namePokemon} :D <3`} </p>; // uso de llaves para escribir JS en JSX
  const App = () => {
    return (
      <>
      <Logo/>
      <Bestpokemon/>
      </>
    );
  }; 

export default App;
