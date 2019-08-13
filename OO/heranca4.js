function MeuObjeto() {}
console.log(MeuObjeto.prototype)  // aponta para um objeto 'MeuObjeto {}', que não possui, mas pode possuir, attr

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// Objetos criados com o mesmo construtor apontam para o mesmo __proto__
console.log(obj1.__proto__ === obj2.__proto__)
// O __proto__ de objeto criado atraves de uma funcao construtora, aponta para o prototype da sua funcao construtora
console.log(MeuObjeto.prototype === obj1.__proto__)

// Adicionando parametros ao objeto prototype da função construtora ('classe-mãe')
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
	console.log(`Bom dia! Meu nome é ${this.nome}.`)
}

obj1.falar()

obj2.nome = 'Carolina'  // Sobrescreve o valor do atributo herdado para o objeto especifico
obj2.falar()

/*
 * O prototype da função construtora é semelhante as classes em OO.
 * As propriedade criadas para um prototype, são herdados por todos os objetos criados por esta construtora.
 * Estes objetos referenciam o prototype da 'class-mãe' atraves da propriedade __proto__ dos objetos.
 */

// Criando um objeto sem uma funcao construtora, seu __proto__ aponta para Object.prototype
// Iremos alterar isto manualmente
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype  // apontamento manual
obj3.nome = 'obj3'
obj3.falar()


/* Resumo: todos os testes são true */
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)  // __proto__ de um obj aponta para o prototype de sua funcao construtora
console.log(MeuObjeto.__proto__ === Function.prototype)  // Uma função construtora tbm é um obj e seu __proto__ aponta para o prototype de Function ('classe-mãe' de todas as funcoes)
console.log(Function.prototype.__proto__ === Object.prototype)  // A 'classe-mãe' de Function (ou Array, String, etc) é a construtora Object
console.log(Object.prototype.__proto__ === null)  // Por fim, Object não possui 'classe-mãe', apesar do possuir o atributo prototype.__proto__