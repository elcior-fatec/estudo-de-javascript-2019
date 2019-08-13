Array.prototype.map_2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i], i, this))
    }
    return array
}

const carrinho = [
	'{"nome": "Borracha", "preco": 3.45}',
	'{"nome": "Caderno", "preco": 13.90}',
	'{"nome": "Kit de lápis", "preco": 41.22}',
	'{"nome": "Caneta", "preco": 7.5}'
]

// Retornar um array apenas com os preços (float)
const parseParaJson = e => JSON.parse(e)
const extrirPrecos = e => e.preco

let precos = carrinho.map_2(parseParaJson).map_2(extrirPrecos)

console.log(precos)