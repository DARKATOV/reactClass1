import logo from './logo.svg';
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'
import Logo from './components/Logo';
import Bestpokemon from './components/BestPokemon';

const appName = "Pokedex";
let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

function App(){
  return (
      <>
      <Logo appName={appName}/>
      <Bestpokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
      </>
    );
  }

  
 export default App;
