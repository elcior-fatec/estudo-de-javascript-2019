console.log(Object.prototype)

const obj1 = { a: 1 }
const obj2 = { b: 2 }

console.log(obj1.__proto__ === Object.prototype)
console.log(typeof obj1.__proto__, typeof Object.prototype, typeof Object)

const obj21 = { c: 3, __proto__: obj2 } // instancia um prototipo para o objeto obj21
console.log(obj21)
console.log(obj21.b, obj21.x) // testa a herança
console.log(Object.entries(obj21))
