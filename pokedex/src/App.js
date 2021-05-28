import logo from './logo.svg';
import './App.css';

function Logo() {
  return (
    <div>
      <h1>
        Bienvenido al Pokedex
      </h1>
      <img
      alt = "pokemonImage"
      src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png">
      </img>
    </div>
  );
};

const Bestpokemon = () =>   
  <p>favorite pokemon</p>;
  const App = () => {
    return (
      <>
      <Logo/>
      <Bestpokemon/>
      </>
    );
  }; 

export default App;
