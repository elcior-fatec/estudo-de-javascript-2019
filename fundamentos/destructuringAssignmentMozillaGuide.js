/**
 * A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão 
 * JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
 */

let a, b, rest

[a, b] = [1, 2]  // Igual a desestruturação de Tuplas do Python
console.log(a)
console.log(b)

// O operador '...' rest/spread não funciona desta maneira no NodeJs, mas funciona no browser
/*[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a)
console.log(b)
console.log(rest)*/

//Não funciona desta maneira no NodeJs, mas funciona no browser
/*({a, b} = {a: 1, b: 2})
console.log(a)
console.log(b)*/

//Não funciona desta maneira no NodeJs, mas funciona no browser
/*({a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4})*/


let foo = ['one', 'two', 'three']
let [um, dois, tres] = foo

console.log(um)
console.log(dois)
console.log(tres)

//Não funciona desta maneira no NodeJs, mas funciona no browser
/*[a=5, b=7] = [1]
console.log(a)
console.log(b)*/

a = 0; b =1;
[b, a] = [a, b]
console.log(`a: ${a}, b: ${b}`)
