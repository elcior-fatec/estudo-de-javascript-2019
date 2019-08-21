// Lógica de negócio vinculada ao CRUD e ao Banco de Dados simulado

// Criando um obj singleton para armazenar a ID
const sequence = {
	_id: 1,
	get id() { return this._id++ }  // GETTER
}


const produtos = {}


function salvarProduto(produto) {
	if(!produto.id) {
		produto.id = sequence.id  // incrementa o ultimo ID para um novo produto
	}	
	produtos[produto.id] = produto  // adiciona um 'produto' ao array 'produtos'.
	return produto
}


function getProduto(id) {
	return produtos[id] || {}  // retorna um produto segundo a ID recebida como parametro
}


function getProdutos() {
	return Object.values(produtos)  // retorna todos os objetos
}


function excluirProduto(id) {
	const produto = produtos[id]
	delete produtos[id]
	return produto
}


// Exporta as logicas
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }