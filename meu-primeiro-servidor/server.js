//Criar uma porta
//Criar uma rota
//http request
//Enviar uma Response

const express = require('express') //Faço o requerimento do express que é o pacote que a gente pegou lá no npm
const app = express() //Importando o arquivo, instanciando

app.get('/', (request, response) => {
    console.log('Uma requisição foi realizada')
    response.status(200).json('Dor e Sofrimento')
})

app.get('/jurema', (request, response) => {
    console.log('Url Jurema foi requerida')
    response.status(200).json([
        {
            'nome': 'jurema',
            'idade': 'adulta'
        },
        {
            'dona': 'vitoria',
            'tempo': '4 meses'
        }
    ])
})

app.listen(3000, () => { //o metodo usado é o listen
    console.log('Meu primeiro servidor rodando na porta 3000')

}) //Aqui eu passo a porta que eu quero que a app rode tem algumas por padrão que se sabe que não tem nada no computador rodando nela


