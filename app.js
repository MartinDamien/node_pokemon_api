const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`application lancé sur l'adresse : http://localhost:${port}, press Ctrl+C to stop, or Ctrl+Shift+C to quit.`));