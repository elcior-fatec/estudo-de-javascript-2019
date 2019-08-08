const soma = (a, b) => a + b

const imprimirCalc = function(a, b, operacao = soma) { 
	return operacao(a, b) 
}

console.log(imprimirCalc(3, 4))
console.log(imprimirCalc(3, 4, function(a, b) {
	return a - b
}))
console.log(imprimirCalc(3, 4, (a, b) => a * b))