// Operador Rest (Juntar)
// usado com parametro de função
function total(...numeros) {
	let total = 0
	numeros.forEach(numero => total += numero)
	return total
}
console.log(total(10, 10, 10, 10))


// Operador Spread (Espalhar)
// usando com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)


// Observação: Note que é diferente de incluir o objeto dentro do outro objeto
const cloneErrado = { ativo: true, funcionario}
console.log(cloneErrado)


// usando com array
grupoA = ['Maria', 'Ana', 'Suzanne', 'Fabíola']
grupoTotal = ['Cássia', ...grupoA, 'Paula']
console.log(grupoTotal)


// Observação: Note que é diferente de incluir o array original dentro do novo
const grupoTotalErrado = ['Cássia', grupoA, 'Paula']
console.log(grupoTotalErrado)
