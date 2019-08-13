// Simulando os processos que ocorre ao usarmos o operador 'new'
function Aula(nome, videoID) {
	this.nome = nome
	this.videoID = videoID
}

const aula1 = new Aula('Bem-vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)


// Simulador:
// f: funcao construtura; params: conjunto de parametros concatenados em um array pelo operador '...'
function novo(f, ...params) {
	const obj = {}  // cria um objeto vazio e o instancia em uma variavel
	obj.__proto__ = f.prototype  // O __proto__ do objeto referencia o atributo (objeto) prototype da construtora
	f.apply(obj, params)  // executa a função construtora passando f como contexto e o array params de parametros
	return obj  // retorna o objeto criado
}

// A funcao novo() agora faz o mesmo papel do operador 'new'
const aula3 = novo(Aula, 'Bem-vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)