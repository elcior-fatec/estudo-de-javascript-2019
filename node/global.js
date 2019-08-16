// console.log(global)

// Pode ser acessado em qq local do programa que o importar
global.minhaApp = {
	saudacao() {
		return 'Estou em todos os lugares'
	},
	nome: 'Sistema Legal'
}


// Não permite sobrescrever as propriedades do objeto global
global.minhaAppCongelada = Object.freeze({
	saudacao() {
		return 'Estou em todos os lugares Congelado'
	},
	nome: 'Sistema Legal Congelado'
})