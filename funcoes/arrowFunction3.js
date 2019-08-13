let comparaComThis = function(parametro) {
    console.log(this === parametro)
}

comparaComThis(global) // como o this foi definido em uma funcao no escopo global sua referencia eh o objeto 'head'

const obj = {}
comparaComThis = comparaComThis.bind(obj) // altera a referencia de this para o obj
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = parametro => console.log(this === parametro)
// dentro do node, arquivos sao modulos, os modulos estao dentro de 'global', assim, o 'this' se refere ao modulo, não ao 'global'
comparaComThisArrow(global) // this
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj) // tentando mudar a referencia do this em uma arrow function
comparaComThisArrow(obj) // false : a referencia do THIS em uma ARROW FUNCTION eh IMUTAVEL!
comparaComThisArrow(module.exports)
