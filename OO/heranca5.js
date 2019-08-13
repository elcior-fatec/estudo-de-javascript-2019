// Criando uma nova propriedade dentro das funçoes construtoras de um tipo primitivo

// Criando um metodo reverse() para String. Nativamente este é um metodo de Array 
String.prototype.reverse = function() {
	return this.split('').reverse().join('')
}

console.log('Fatec RP'.reverse())

// Novo metodo para Array que encontra o primeiro item de um array
Array.prototype.first = function() {
	return this[0]
}

console.log(['a', 'b', 'c', 'd'].first())
console.log([{ a: 1, b: 2 }, 1, 2.3, 'a'].first())

// Nao eh aconselhavel alterar metodos nativos das funções construtoras originais do JS
String.prototype.toString = function() {
	return 'Lascou tudo'
}

console.log('Fatec RP'.reverse())  // out: "odut uocsaL"