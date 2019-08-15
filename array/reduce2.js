const aprovados = [
	{nome: 'Ana', nota: 7.3, bolsista: false},
	{nome: 'Rosana', nota: 9.2, bolsista: false},
	{nome: 'Joana', nota: 9.8, bolsista: true},
	{nome: 'Juliana', nota: 8.7, bolsista: false},
]

// Desafio 1: Todos os alunos são bolsistas?
const statusBolsa = a => a.bolsista
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(aprovados.map(statusBolsa).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(aprovados.map(statusBolsa).reduce(algumBolsista))