const express = require("express");
let pokemons = require("./mock_pockemon");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Index Page"));

app.get("/api/pokemon/:id", (req, res) => {
  // :id is a placeholder for the id of the pokemon
  const id = parseInt(req.params.id); // parseInt convertie une chaine de caractere en un nombre
  const pokemon = pokemons.find((pokemon) => pokemon.id === id); // find returns the first element that satisfies the condition
  res.json(pokemon);
});

app.get("/api/pokemon", (req, res) => {
  res.send(`il y a ${pokemons.length} pokemons dans le pokedex pour le moment`);
});

app.listen(port, () =>
  console.log(
    `application lancé sur l'adresse : http://localhost:${port}, press Ctrl+C to stop, or Ctrl+Shift+C to quit.`
  )
);
