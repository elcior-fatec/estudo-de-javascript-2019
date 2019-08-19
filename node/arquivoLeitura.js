const fs = require('fs')  // Modulo

// __dirname é uma constante disponível em todos os arquivos do node e armazena o caminho para o diretorio atual
const caminho = __dirname + '/arquivo.json'

// SINCRONO....
// Leitura sincrona não é recomendavel para o node
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


// ASSINCRONO....
// no metodo assincrono é passado uma callback que é disparada quando o conteudo for carregado. 
// A callback recebe um erro (caso bem sucedida 'err === null') e o conteudo da leitura do disco
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
	const config = JSON.parse(conteudo)
	console.log(`${config.db.host}:${config.db.port}`)
})


// exclusivo para JSON. Já traz o  JSON convertido para objeto, dispensando o JSON.parse()
const config = require('./arquivo.json')
console.log(config.db)


// Leitura de DIRETORIO
// Como a execução assincrona, dispara uma callback que recebe o erro (caso bem sucedida 'err === null') e um array com o nome de todos os diretorios
fs.readdir(__dirname, (err, arquivos) => {
	console.log("Aqui esta o conteudo desta pasta...")
	console.log(arquivos)
})