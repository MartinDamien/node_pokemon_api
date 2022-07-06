const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const { success } = require("./helper.js");
let pokemons = require("./mock_pockemon");

const app = express();
const port = 3000;


// middleware
app
  .use(favicon(__dirname + "/public/favicon.ico"))
  .use(morgan("dev"));


// routes
app.get("/", (req, res) => res.send("Index Page"));

app.get("/api/pokemon", (req, res) => {
  const message = pokemons ? `${pokemons.length} pokemon trouvés`: `Aucun pokemon trouvé`;
  res.json(success(message, pokemons));
});

app.get("/api/pokemon/:id", (req, res) => { // :id is a placeholder for the id of the pokemon
  const id = parseInt(req.params.id); // parseInt convertie une chaine de caractere en un nombre
  const pokemon = pokemons.find((pokemon) => pokemon.id === id); // find returns the first element that satisfies the condition
  const message = pokemon ? `un ${pokemon.name} sauvage apparait` : `pas de pokemon trouvé`; // if pokemon is not null, we display a message with the name of the pokemon
  res.send(success(message, pokemon));
});


// start the server
app.listen(port, () =>
  console.log(
    `application lancé sur l'adresse : http://localhost:${port}, press Ctrl+C to stop, or Ctrl+Shift+C to quit.`
  )
);
