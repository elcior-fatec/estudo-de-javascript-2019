/**
 * TEMPLATE STRING é uma funcionalidade implementada apartir do EcmaScript 2015
 */

const nome = 'Rebecca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!`

console.log(template) // O template formata a string conforme o desejo do progarmador

/**
 * O delimitador ${<variavel>} interpola (interpreta) o valor de uma variavel ou expressão 
 * dentro de uma string delimitada por acento grave.
 * A formatação aceita as quebras de linhas e tabs inseridos manualmente.
 */

 /* EXPRESSÕES */

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Arrow Function
console.log(`Ei... ${up('cuidado')}!`)