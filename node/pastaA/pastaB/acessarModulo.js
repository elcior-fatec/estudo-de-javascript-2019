// Acesso a modulos do projeto
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

// Modulo core do Node
const http = require('http')
http.createServer((req, res) => {
	res.write('Bom dia!')
	res.end()
}).listen(8080)
