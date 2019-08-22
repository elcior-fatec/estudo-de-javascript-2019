function tag(partes, ...valores) {
	console.log(partes)  // Imprimirá um array com as strings que compõem a template string
	console.log(valores)  // Imprimiráum array com os valores que irão ser intepolados no template string
	return "Outra string."
}

const aluno = 'Guilhermina'
const situacao = 'aprovada'
console.log(tag `${aluno} está ${situacao}.`)  // Obs. O valor impresso não será está string. Apenas executa a Tagged Template