const produto = new Object
produto.nome = 'cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
	modelo: 'A4',
	valor: 89000,
	proprietario: {
		nome: 'Raul',
		idade: 56,
		endereco: {
			logradouro: 'Rua ABC',
			numero: 123
		}
	},
	condutores: [{
		nome: 'Aline',
		idade: 21
	}, {
		nome: 'Ana',
		idade: 35
	}],
	calcularValorSeguro: function() {
		// ...
	}	
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // Nao gera erro, apenas retorna Undefined
console.log(carro.condutores.length) // Caso carro.condutores tivesse sido deletado o codigo iria gerar um erro