const http = require('http')

const getTurma = letra => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
	return new Promise((resolve, reject) => {
		http.get(url, res => {
			let resultado = ''

			res.on('data', dados => {
				resultado += dados
			})

			res.on('end', () => {
				try {
					resolve(JSON.parse(resultado))
				} catch(e) {
					reject(e)
				}
			})
		})
	})
}

// Recurso do ES8
// Objetivo simplificar o Promisse
let obterAlunos = async () => {  // importante marcar a função com a palavra 'async'
	// 'await': aguarda a resolução de uma função que retorna uma Promisse para ir para o proximo passo
	const ta = await getTurma('A')
	const tb = await getTurma('B')
	const tc = await getTurma('C')  // estas tres chamadas aparentam serem sincronas, mas são assincronas pois envolvem o Promisse
	return [].concat(ta, tb, tc)  // apesar de parecer que retorna um array, na verdade retorna um objeto 'asyncFunction', que possui em seus metodos o .then()
}

obterAlunos()
	.then(alunos => alunos.map(a => a.nome))
	.then(nomes => console.log(nomes))