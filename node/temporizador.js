const schedule = require('node-schedule')

/**
 * Padrão da string node-schedule:
 *
 *		* * * * * *
 *  	| | | | | |
 *  	| | | | | L__ day of week (0 - 7) (0 or 7 is Sun)
 *  	| | | | L____ month (1 -12)
 *  	| | | L______ day of month (1 - 31) 
 *  	| | L________ hour (0 - 23) 
 *  	| L__________ minute (0 - 59)  
 *  	L____________ second (0 - 59, OPTIONAL)   
 */


// Rodando a tarefa passada pela callback a cada 5 segundos da hora 11 das quarta-feiras
// Ao rodar o programa, esta tarefa fica ativa até ser cancelada, no caso desta tarefa de contador.
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 3', function() {
	// Tarefa callback que exibe uma string com a impressão daquele segundo dinamicamente
	console.log("Executando Tarefa 1!", new Date().getSeconds())
})


// Maneira de cancelar uma tarefa.
// Após 20 segundos a tarefa schedule job é cancelada, independente de ter impresso ou não algo na tela
setTimeout(function() {
	tarefa1.cancel()
	console.log("Cancelando Tarefa 1!")
}, 20000)


// Outras funções:
// setImmediante : dispara uma função imediatamente, como setTimeout recebece o time === 0
// setInterval : dispara uma função com intervalos de tempo


// Programar REGRA para recorrencia
const regra = new schedule.RecurrenceRule()  // um obj de schedule que permite agendar recorrencias atraves da configuração dos seus atributos
regra.dayOfWeek = [new schedule.Range(1, 5)]  // agenda dentro de um range (1: segunda até 5: sexta)
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {  // Não recebe a string, mas sim um obj schedule.RecurrenceRule()
	console.log("Executando Tarefa 2!", new Date().getSeconds())
})
