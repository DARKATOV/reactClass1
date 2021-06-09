let CaughtPokemon = () => {
    const date = new Date().toLocaleDateString();      // uso de llaves para escribir JS en JSX
    return <p><h3>Caught 0 Pokemon on {`${date}`}</h3></p>;
};

export default CaughtPokemon