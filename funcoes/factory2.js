function Produto(nome = 'sem-nome', preco = 0.0) {
	let desconto = preco > 2000.00?0.03:0.015
	return {
		nome: nome,
		preco: preco,
		desconto: desconto
	}
}

function PacoteDeProdutos(produto, qtd = 1) {
	let preco = qtd * (produto.preco - (produto.preco * produto.desconto))
	return {
		nomeProduto: produto.nome,
		decontoPorProduto: produto.desconto,
		precoPacote: preco,
		quantidade: qtd
	}
}


const tv = new Produto('TV', 2600.00)
console.log(tv)

const gibi = new Produto('Homem-Aranha', 19.50)
console.log(gibi)

console.log(`Produto: ${tv.nome}, Preço: R$ ${(tv.preco - (tv.preco * tv.desconto)).toFixed(2)}`)
console.log(`Produto: ${gibi.nome}, Preço: R$ ${(gibi.preco - (gibi.preco * gibi.desconto)).toFixed(2)}`)


const traquinas = new Produto('Traquinas', 1.99)
const traquinas6Unidade = new PacoteDeProdutos(traquinas, 6)

console.log(`Produto: ${traquinas.nome}, Preço: R$ ${(traquinas.preco - (traquinas.preco * traquinas.desconto)).toFixed(2)}`)
console.log(`Produto: ${traquinas6Unidade.nomeProduto}, Preço: R$ ${traquinas6Unidade.precoPacote.toFixed(2)} se ${traquinas6Unidade.quantidade} unidades`)
