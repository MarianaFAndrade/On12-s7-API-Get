const express = require('express')
const app = express()

const filmes = require('./data/ghibli.json')

app.get("/", (request, response) => {
    response.status(200).send('Salve essa merda')
    console.log('Salve essa merda')
})

// app.get('/filmes', (request, response) => {
//     response.status(200).send(filmes)
// })

app.get('/filmes/:identificacao', (request, response) => {
    const idRequisitado = request.params.identificacao

    response.status(200).send(filmes.find(filme => filme.id == idRequisitado))
})

app.listen(3000, () => {
    console.log('Dor e sofrimento')
})