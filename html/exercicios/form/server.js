const express = require('express')
// A constante app será o servidor express
const app = express()
const bodyParser = require('body-parser')

// Faz o parser do body-parser, sem este parser a aplicação não consegue ler o conteúdo do body da request
// O body-parser també, organiza as informações do body da requisição em uma estrutura de objeto pronta para ser processada pelo javascript
app.use(bodyParser.urlencoded({ extended: true }))

// Definimos que o servidor irá processar as requisições do tipo GET vidas da URL /usuarios da maneira definida na callback
app.get('/usuarios', (req, resp) => {
    // imprime os parametros do body da requisição para POST
    console.log(req.body)
    // imprime os parametros do body da requisição para GET
    console.log(req.query)
    // envia na resposta o html a baixo
    resp.send('<h1>Parabéns! Usuário incluido!!!</h1>')
})

app.post('/usuarios/:id', (req, res) => {
    // a cima informamos que o ultimo parametro da URL será o 'id'
    // a baixo acessamos o parametro :id da URL
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns! Usuários alterado!!!</h1>')
})

// usar a porta 3003 para os processos inciados neste server.js
app.listen(3003)
