console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// module.exports, exports e this são variaveis que aponta para o mesmo objeto, no entanto, 
// apenas module.exports é exportada.
exports = null
console.log(module.exports)

// Apontando exports para um novo objeto
exports = {
	nome: 'Ana'
}
console.log(module.exports)

// Agora se apontar o module.exports para um novo objeto...
module.exports = {
	publico: true
}
console.log(module.exports)