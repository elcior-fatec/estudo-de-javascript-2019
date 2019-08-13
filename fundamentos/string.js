/**
 * As strings podem ser criada usando como delimitadores:
 *  - "Aspas"
 *  - 'Apóstofos'
 *  - `Acentos graves`
 */
const escola = "Cod3r"

/* ASCII */
console.log(escola.charAt(4)) // retorna o char no index 4
console.log(escola.charAt(5)) // retorna vazio pq não existe char na posição 5

console.log(escola.charCodeAt(3)) // Encontra o valor ASCII do char no index
console.log(escola.charCodeAt(5)) // Fora do intervao o valor retornado é NaN

/* INDEX DE ELEMENTOS */
console.log(escola.indexOf('C')) // Encontra o index do  PRIMEIRO char buscado dentro da string
console.log(escola.indexOf('&')) // Caso não exista a função retorna -1

/* SLICE */
console.log(escola.substring(1)) // Slice apartir do index 1
console.log(escola.substring(0, 2)) // Slice do primeiro parametro até a posição indicada (exclusive)

/* CONCATENAR */
console.log('Escola '.concat(escola).concat("!"))

/* REPLACE */
console.log(escola.replace('3', 'E')) // Replace com char
console.log(escola.replace(3, 'e')) // Identifica um numero mesmo este sendo um char

/* SPLIT */
console.log('Ana,Maria,Solange'.split(','))