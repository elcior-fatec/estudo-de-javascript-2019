// Object.preventExtensions(): Cria um objeto que não pode ter parametros adicionado, mas pode ter params deletados ou alterados
const produto = Object.preventExtensions({
	nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'  // Nao sera possivel criar um novo attr, NAO OCORRE ERRO
delete produto.tag
console.log(produto)

// Object.seal(): Cria um objeto que não pode ter parametros adicionado, nem excluidos, mas pode ter params alterados
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'  // Nao sera possivel criar um novo attr, NAO OCORRE ERRO
delete pessoa.nome  // Nao sera possivel excluir o attr, NAO OCORRE ERRO
pessoa.idade = 19
console.log(pessoa)


// Object.freeze = selado + valores constantes: Cria um objeto que não pode ter parametros adicionado, nem excluidos e alterados