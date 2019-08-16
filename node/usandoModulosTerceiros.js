/**
 * Instalar biblioteca (coleções de modulo) local no projeto: 
 * $ npm i [nome-da-biblioteca]
 *
 * Isto cria um diretorio chamado /node_modules o qual armazena toda as bibliotecas instaladas com o
 * npm.
 * 
 * A pasta /node_modules pode ser acrescentada ao .gitignore pois a descrição destas dependencias podem
 * ser acessadas e instaladas por via do package-lock.json
 */

const _ = require('lodash')

setInterval(() => console.log(_.random(500, 1000)), 2000)


/**
 * Instalar biblioteca (coleções de modulo) de forma global: 
 * $ sudo npm i -g [nome-da-biblioteca]
 *
 * Neste caso seria interessante a criação de um virtual enviroment para não instalar a lib direto no OS.
 */

 // Usamos com exemplo a insatalação do nodemon para reinicio automatico do node após as alterações
 // no arquivo.
