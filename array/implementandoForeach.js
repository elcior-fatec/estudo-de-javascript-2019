// IMPLEMENTACAO
// Minha versao
Array.prototype.forEach_1 = function(funcao) {
	for(let i = 0; i < this.length; i++) {
		funcao(this[i], i, this)
	}
}

// Versao Professor


// TESTES
// Minha versao
const aprovados = ['Rafael', 'Ana', 'Bia', 'Sarah']

aprovados.forEach_1(function(nome, indice) {
	console.log(`${indice + 1}) ${nome}`)
})

// Versao Professor