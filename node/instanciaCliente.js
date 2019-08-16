const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


contadorA.incValor()
contadorA.incValor()
// Observando o cache do Node
console.log(`contadorB: ${contadorB.valor}, contadorA: ${contadorA.valor}`)

contadorC.incValor()
contadorC.incValor()
// A factory impede o cache
console.log(`contadorD: ${contadorD.valor}, contadorC: ${contadorC.valor}`)

/**
 * Em instanciaUnica exporta um objeto, por isso ao importa-lo para o modulo que o utiliza o node cria um cache,
 * no entanto, instanciaNova returna uma função. Esta função é a responsavel por criar o objeto, ou seja, o obj
 * é criado pelo modulo que o importou, assim o cache não processa.
 * 
 * Outra forma de entender o problema é, quando criado o primeiro obj de instanciaUnica, as demais variaveis que
 * o instanciarem, na verdade irão referenciar o primeiro obj criado. No caso de instanciaNova, as funções ao serem
 * evocadas, criam novos objetos e as variaveis apontam para este, não para o obj que foi criado em outro modulo.
 */