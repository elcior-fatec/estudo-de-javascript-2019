// IMPLEMENTACAO
// Minha versao
Array.prototype.forEach_1 = function(callback) {
	for(let i = 0; i < this.length; i++) {
		callback(this[i], i, this)
	}
}

// Versao Professor
// idem minha versao

// TESTES
// Minha versao
const aprovados = ['Rafael', 'Ana', 'Bia', 'Sarah']

aprovados.forEach_1(function(nome, indice) {
	console.log(`${indice + 1}) ${nome}`)
})
