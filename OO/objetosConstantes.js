// pessoa -> END0001 -> 'Local na memoria'
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// ('Outro local da memoria' -> END0002) <- pessoa
// const pessoa não pode receber outro valor, no caso uma nova referencia
// pessoa = { nome: 'Ana' }


// o metodo Object.freeze bloqueia alterações que se tente fazer ao objeto. 
// Nao gera erro, apenas ignora as alteracoes
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.idade = 55
delete pessoa.nome

console.log(pessoa) // Objeto nao pode ser alterado apos o freeze

// criar um objeto já bloqueado
const pessoaConstante = Object.freeze({ nome: 'Paula' })
pessoaConstante.nome = 'Marcelão'
console.log(pessoaConstante)