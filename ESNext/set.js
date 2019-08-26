// Extrutra nã indexada, que não aceita repetição de itens

const times = new Set()  // conjuntos são instancias do construtor Set()
times.add('Vasco')  // adicionamos um item ao conjunto usando o metodo .add(item)
times.add('São Paulo')
times.add('Palmeiras').add('Corinthians')  // o metodo .add() permite encadeamento, pq este metodo altera o conjunto em que esta sendo aplicado
times.add('Flamengo')
times.add('Vasco')  // não aceita itens repetidos

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
console.log(times.delete('Vasco'))
console.log(times.has('Vasco'))

// Criando um conjunto por meio de um array existente
const alunos = ['Ana', 'Maria', 'Solange', 'Sabrina', 'Ana']
const setAlunos = new Set(alunos)
console.log(setAlunos)  // O item repetido não é incluido no conjunto
console.log(alunos)