const ferrari = {
	modelo: 'F40',
	velMax: 324
}

const volvo = {
	modelo: 'V40',
	velMax: 200
}

// Testes com prototipos
console.log(ferrari.__proto__)  // 
console.log(ferrari.__proto__ === Object.prototype)  // __proto__ referencia para prototype (classe mae) do objeto
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype)  // prototype eh o objeto que será herdado. Toda funcao tem um prototype
console.log(MeuObjeto.prototype)

// prototype sao atributos especificos de funcoes
// __proto__ sao atributos exclusivos de objetos (uma funcao eh um objeto)