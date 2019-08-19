const fs = require('fs')

const produto = {
	nome: 'Celular',
	preco: 1249.99,
	desconto: 0.15
}


// O metodo fs.writeFile() recebe 3 parametros:
// 		- Caminho para o arquivo, incluindo seu nome
// 		- O conteúdo a ser escrito no arquivo
// 		- A função callback para tratar os erros de escrita
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
	console.log(err || "Arquivo salvo!")
})