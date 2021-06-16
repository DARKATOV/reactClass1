import logo from './logo.svg';
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'
import Logo from './components/Logo';
import Bestpokemon from './components/BestPokemon';

const appName = "Pokedex";
let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

function logWhenClicked() {
  console.log("IMG was clicked");
};

function App(){
  return (
      <>
      <Logo appName={appName} hangClick={logWhenClicked}/>
      <Bestpokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
      </>
    );
  }

  
 export default App;
