const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Index Page'))

app.get('/api/pokemon/:id', (req, res) => {
    const id = req.params.id
    res.send(`Vous avez demandez le pokemon n° ${id}`)
    res.send(id)
    })

app.listen(port, () => console.log(`application lancé sur l'adresse : http://localhost:${port}, press Ctrl+C to stop, or Ctrl+Shift+C to quit.`))