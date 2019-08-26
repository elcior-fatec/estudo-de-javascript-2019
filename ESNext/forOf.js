// for...in opera sobre os indices dos array
// for...of opera sobre os valores dos arrays

/**
 * Usando em um String
 */
for(let letra of 'Elcior\n') {
	console.log(letra)
}

const assuntosECMA = ['Map', 'Set', 'Promise']
for(let i in assuntosECMA) {
	console.log(i)
}
for(let assunto of assuntosECMA) {
	console.log(assunto)
}

/**
 * Usando em um Map
 */
const assuntosMap = new Map([
	['Map', {abordado: true}],
	['Set', {abordado: true}],
	['Promise', {abordado: false}]
])

// Acessando os itens completos
for(let assunto of assuntosMap) {
	console.log(assunto)
}

// Acessando as chaves dos itens
for(let chave of assuntosMap.keys()) {
	console.log(chave)
}

// Acessando os valores dos itens
for(let valor of assuntosMap.values()) {
	console.log(valor)
}

// Acessando as Array que contem chave, valor => entries()
// O resultado é igual ao for...of simples, mas neste caso esta explicito o que foi pretendido
for( let [ch, vl] of assuntosMap.entries()) {
	console.log(ch, vl)
}

/**
 * Usando em um Set
 */
const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
	console.log(letra)
}