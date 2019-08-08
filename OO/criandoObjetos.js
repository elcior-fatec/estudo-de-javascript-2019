// Notacao Literal
const obj1 = {}
console.log(obj1)


// Object()
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


//Funcoes Construtoras
function Produto(nome, preco, desc) {
	// variaveis dentro de objetos JavaScript sao sempre publicas / ver em getters e setters. 
	// Em js somente existem atributos privados dentro das funcoes (ou blocos usando as palavras privadas 'let' e 'const')
	this.nome = nome,
	this.getPrecoComDesconto = () => {
		// como estes dois valores foram declarados dentro de uma funcao, seus escopos sao privados (encapsulados)
		return preco * (1 - desc)
	}
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas)
		}
	}
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


 // Object.create
 const filha = Object.create(null)
 filha.nome = 'Ana'
 console.log(filha)


 // funcao famosa que retorna um objeto...
 const fromJSON = JSON.parse('{"info": "Eu sou um Json"}')
 console.log(fromJSON.info)