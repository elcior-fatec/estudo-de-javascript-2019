/**
 * O promise é uma técnica para ajudar a lidar com requisições assincronas:
 * O promise aguarda uma resposta para então executar uma outra parte do código que depende da exceução de uma primeira parte.
 * A segunda parte promete alguma coisa para a primeira etapa do código.
 * O setTimeout() irá simular a operação assincrona
 * O promise responde com uma resolve ou uma reject
 */

function falarDepoisDe(segundos, frase) {
	// retorna um obj Promise que recebe uma callback que recebe os paramentros: o resolve e o reject
	return new Promise((resolve, reject) => {
		// simulando o dalay e depois o metodo resolve cumpri a promessa feita
		setTimeout(() => {
			// Resolva UMA promessa feita! (aceita apenas UM parametro!)
			resolve(frase)
			//reject('Apenas para apontar, este é um Reject, mas sem o tratamento de erro try...catch')
		}, segundos * 1000)
	})
}


// acessando a promise passando 3 segundos e uma string
falarDepoisDe(3, "Que legal!")
	.then(frase => frase.concat('?!?'))
	.then(outraFrase => console.log(outraFrase))
	.catch(e => console.log(e))

/**
 * Após a execução do dalay (3 segundos) a função retorna uma Promise (com o seu resolve e o seu reject).
 * Em cima deste objeto Promise é executado um, ou mais, metodos .then(), que aplicam as regras de negócio as respostas retornadas.
 * Então no exemplo a cima, o falarDepoisDe retorna um objeto Promise que possui uma string. 
 * O primeiro .then() executa em cima da string uma concatenação e retorna outro Promise(), com a string concatenada. 
 * Outro .then() é aplicado nesta nova string que irá imprimir a nova string concatenada.
 */