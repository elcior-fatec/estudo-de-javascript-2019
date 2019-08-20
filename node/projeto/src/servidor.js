/**
 * Configurações de acesso ao servidor: testar com POSTMAN
 */
const porta = 3003
const express = require('express')
// inicia o servidor express?
const app = express()
// inicia o projeto
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

/**
 * Lógica que devolve uma resposta (JSON) a uma requisição GET ao servidor
 * DOMINIO + /produtos devolve o JSON
 */


// Obriga toda requisição a passar por este middleware (method USE sem URL definida) 
// e faz o parse do body de todas as requisições POST do tipo urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req, res, next) => {
	//res.send({ nome: 'Notebook', preco: 123.45 })  // O metodo send() converte o obj em JSON
	res.send(bancoDeDados.getProdutos())  // Recupera todos os produtos
})


// Obtem um produto atraves da sua id
app.get('/produtos/:id', (req, res, next) => {
	res.send(bancoDeDados.getProduto(req.params.id))  // req.params é o responsavel por armazenar os parametros passados na req (podem ser mais de um)
})


//Salvar um produto: A req se dá na mesma URL que se obtem os produtos, mas o metodo POST diferencia o objetivo dá requisição
app.post('/produtos', (req, res, next) => {
	const produto = bancoDeDados.salvarProduto({
		nome: req.body.nome,  // acesso aos parametros se dá atraves do body da req POST
		preco: req.body.preco  // acesso aos parametros se dá atraves do body da req POST
	})
	res.send(produto)  // JSON
})


// Altera os produtos. Atenção a URL com paramentros e ao method que agora é PUT
app.put('/produtos/:id', (req, res, next) => {
	const produto = bancoDeDados.salvarProduto({
		id: parseInt(req.params.id),
		nome: req.body.nome,
		preco: req.body.preco
	})
	res.send(produto)
})


// Exclui um produto tendo por paramero seu 'id' e retorna uma cópia do prod excluido para visualização da finalização
app.delete('/produtos/:id', (req, res, next) => {
	const produto = bancoDeDados.excluirProduto(req.params.id)
	res.send(produto)
})


// Habilita o express, enquanto ativo, usar a porta definida acima para o processo de req/res
app.listen(porta, () => console.log(`Servidor está executando na porta ${porta}.`))
