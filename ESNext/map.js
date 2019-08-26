const tecnologias = new Map()  // Os maps são instancias de um construtor Map()
// para atribuir novos itens ao map é requisito usar o metodo .set(chave, valor)
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

// Não é possivel acessar um item do map diretamente atraves do operador 'ponto'.
// As chaves devem ser acessadas usando o metodo .get(chave)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

// Um Map() é uma matriz, onde os array mais internos (colunas) são compostos por uma chave e um valor
const chavesVariadas = new Map([
	[function() {}, 'Função'],
	[{}, 'Objeto'],
	[123, 'Número'],
])

chavesVariadas.forEach((ch, vl) => {
	console.log(ch, vl)
})

// o metodo .has(chave) retorna TRUE se a chave compõem o map
console.log(chavesVariadas.has(123))

// o metodo .delete(chave) retorna TRUE se o item identificado pela chave for excluido
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))

// o atributo .size verifica o numero de item dentro do map
console.log(chavesVariadas.size)

// Os maps são estruturas chave/valor que NÃO ACEITAM REPETIÇÃO para os identificadores CHAVE
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')  // não cria um novo item com a chave repetida. Sobrescreve o item antigo
console.log(chavesVariadas)

chavesVariadas.set(456, 'b') // não existe impedimento no caso de valores duplicados
console.log(chavesVariadas)