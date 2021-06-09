import logo from './logo.svg';
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'

let namePokemon = "Pikachu";

let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];

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

let Bestpokemon = () => {
  return( 
  <>
  <p><h1>My favorite pokemon is {`${namePokemon} :D <3`} </h1></p>
  <ul>
    {abilities.map((ability,index) => <li key={index}>{ability} {index}</li>)}
  </ul>
  </>
  )
};

function App(){
  return (
      <>
      <Logo/>
      <Bestpokemon/>
      <CaughtPokemon/>
      </>
    );
  }

 export default App;
