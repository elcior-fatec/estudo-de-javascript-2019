/**
 * O metodo Array.forEach() aplica uma função callback para cada um dos elementos da array
 */

/**
* Assinatura do metodo: Array.prototype.forEach(callback(valor[, indice[, array]]))
*/

const aprovados = ['Ana', 'Marcela', 'Suzana', 'Fabiana', 'Rosa']

aprovados.forEach(function(nome, indice) {
	console.log(`${indice + 1}) ${nome}`)
})