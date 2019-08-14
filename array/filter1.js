/**
 * O metodo Array.filter() aplica uma callback que seja um teste aos elementos de um interável e retorna um 
 * novo array com aqueles elementos que passam no teste. Deste modo, se o teste retornar um resultado 'true' 
 * o elemento é adicionado ao novo array.
 */

/**
 * Assinatura: Array.prototype.filter(callbak(valor[, indice[, array]]))
 */

const produtos = [
	{nome: 'Notebook', preco: 5499, fragil: true},
	{nome: 'iPod Pro', preco: 2579, fragil: true},
	{nome: 'Copo de vidro', preco: 14.99, fragil: true},
	{nome: 'Copo de plástico', preco: 17.80, fragil: false}
]

console.log(produtos.filter(function(p) {
	return true
}))

function caros(item) { return item.preco > 500 }
function fragil(item) { return item.fragil }

console.log(produtos.filter(caros).filter(fragil))