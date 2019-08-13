/**
 * Transfere os dados de um array original em um novo array, de mesmo tamanho, 
 * com os dados originais transformados. 
 * O metodo Array.map() percorre o original, como o Array.forEach(), e aplica uma
 * callback a cada um dos elementos deste.
 */

 /**
  * Assinatura do metodo: Array.prototype.map(callback(valor[, indice[, array]]))
  */

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
	return e * 2  // Eh importante o retorno dos elementos, pois sem eles ocorre a fomação do novo array mas com itens undefined
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Consegimos encadear as transformações, pois a função map() retorna sempre um array com o mesmo comprimento do original.
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
