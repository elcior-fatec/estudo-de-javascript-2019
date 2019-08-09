const pessoa = {
	nome: 'Ana',
	idade: 3,
	peso: 13,
}


// keys, values e entries fazem uma introspecção no objeto, chamado de Reflexion
// keys()
console.log(Object.keys(pessoa))

// values()
console.log(Object.values(pessoa))

// entries()
console.log(Object.entries(pessoa))


// forEach()
Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`)
})


// defineProperty()
Object.defineProperty(pessoa, 'dataNescimento',{
	enumerable: true,
	writeble: false,
	value: '01/07/2018'
})
pessoa.dataNescimento = '01/07/2015'
console.log(pessoa.dataNescimento)
console.log(Object.keys(pessoa))


// assign() [ECMAScript 2015]
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)


// freeze()
Object.freeze(obj)
obj.c = 123
console.log(obj)