const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Object.create()
const filha1 = Object.create(pai)  // usa o objeto pai como prototype e nao o Object.prototype
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})  // primeiro attr foi o prototype, segundo as propriedades deste novo objeto filho

console.log(filha2.nome)
filha2.nome = 'Carla'  // nao podera sobrescrever o attr
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Object.keys() ira mostrar apenas as propriedades do objeto
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// for (...) in
for(let key in filha1) {
    console.log(key)  // mostra todos as propriedades, inclusive as propriedades do prototype
}

for(let key in filha1) {
    // filtra as propriedades apenas do objeto
    // hasOwnProperty() retorna true || false
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}
