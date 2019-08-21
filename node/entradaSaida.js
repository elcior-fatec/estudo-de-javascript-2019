// Interpretando a flag -a numa chamada node no console 'node entradaSaida.js -a'
const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
	process.stdout.write('Fala anônimo.\r\n')  // No Windows pode ocorrer um problema com o '\n' então sempre usar '\r\n'
	process.exit()
} else {
	process.stdout.write('Informe o seu nome: ')
	process.stdin.on('data', data => {
		const nome = data.toString().replace('\r\n', '')

		process.stdout.write(`Fala ${nome}!!\n`)
		process.exit()
	})
}