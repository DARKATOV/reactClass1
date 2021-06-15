import logo from './logo.svg';
import './App.css';
import CaughtPokemon from './components/CaughtPokemon'
import Logo from './components/Logo';
import Bestpokemon from './components/BestPokemon';

let abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();

function App(){
  return (
      <>
      <Logo/>
      <Bestpokemon abilities={abilities}/>
      <CaughtPokemon date={date}/>
      </>
    );
  }

  
 export default App;
