/**
 * O metodo Array.reduce() é uma função acumulativa. O metodo recebe um callback e um valor 
 * inicial optativo.  O callback recebe dois parametros obrigatorios, um acumulador e o valor atual 
 * da iteração. A callback ainda pode receber outros dois parametros optativos, o indice atual
 * e o array original.
 * O metodo Array.reduce() retorna um resultado final que é calculado atraves das iterações do acumulador
 * com o valor atual. Ou seja, inicialmente o atributo acumulador recebe, ou o valor inicial, ou o primeiro
 * valor do array e o valor inicial recebe, ou o primeiro valor do array, ou o segundo, respectivamente 
 * ao valor atribuido ao acumulador. A iteração processa estes valores e retorna ao acumulador o resultado
 * atribuindo em sequencia o proximo valor do array.
 * O retorno do metodo é o ultimo valor do acumlador após o ultimo valor do array ser processado.
 */

/**
 * Assinatura: Array.prototype.reduce(callbak(acumulador, valorAtual[, indice[, array]])[, valorInicial])
 */

const aprovados = [
	{nome: 'Ana', nota: 7.3, bolsista: false},
	{nome: 'Rosana', nota: 9.2, bolsista: true},
	{nome: 'Joana', nota: 9.8, bolsista: false},
	{nome: 'Juliana', nota: 8.7, bolsista: true},
]

const resultado = aprovados.map(a => a.nota).reduce(function(acumulador, atual) {
	console.log(acumulador, atual)
	return acumulador + atual
}, 0)

console.log(resultado)