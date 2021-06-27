const express = require('express')
const app = express()

const cidadesEstados = require('./estados-cidades.json')

app.get('/', (request, response) => {
    response.status(200).send('Salve Salve')
})

app.get('/estadosCidade', (request, response)=> {
    response.status(200).send(cidadesEstados)
})

app.get('/estadosCidade/:siglas', (request, response) => {
    const cidadeSigla = request.params.siglas
    console.log(cidadeSigla)
    response.status(200).send(cidadesEstados.find(siglas => siglas.sigla == cidadeSigla))
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
}) 