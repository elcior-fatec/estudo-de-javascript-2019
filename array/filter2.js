Array.prototype.filter_2 = function(callback) {
	let newArray = []
	for(let i = 0; i < this.length; i++){
		if(callback(this[i], i, this)) {
			newArray.push(this[i])
		}
	}
	return newArray
}


const produtos = [
	{nome: 'Notebook', preco: 5499, fragil: true},
	{nome: 'iPod Pro', preco: 2579, fragil: true},
	{nome: 'Copo de vidro', preco: 14.99, fragil: true},
	{nome: 'Copo de plástico', preco: 17.80, fragil: false}
]

function caros(item) { return item.preco > 500 }
function fragil(item) { return item.fragil }

console.log(produtos.filter_2(caros).filter_2(fragil))