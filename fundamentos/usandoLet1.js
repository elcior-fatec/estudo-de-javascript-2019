let numero = 1
{
	let numero = 2
	console.log('dentro = ', numero)
}
console.log('fora = ', numero) // 'let' possui, alem de escopo de função, tambem o escopo de bloco

/* As variaveis 'let' consultam primeiramente o escopo local para achar sua referencia/valor, caso
 * não o encontre, a variavel 'let' segue a cadeia de escopo atras de uma declaração. 
 */
 let numero2 = 1
{
	let naoEhNumero = 28
	console.log('dentro 2 = ', numero)
}
console.log('fora 2 = ', numero)