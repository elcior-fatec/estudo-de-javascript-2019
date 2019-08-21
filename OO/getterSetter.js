const sequencia = {
	_valor: 1,  // convencao
	
	// JS nao aceita sobrecarga de metodos, com excessao dos getter e setter
	get valor() { return this._valor++ },
	
	set valor(valor) {
		if(valor > this._valor) {
			this._valor = valor
		}
	}

}

// Veja que _valor nao eh privado, apenas possui uma notacao que convenciona a indicacao de atributos internos
// sequencia._valor = 599
// console.log(sequencia._valor)

// USANDO GETTER
console.log(sequencia.valor, sequencia.valor)  // Os setter sao chamados como se fossem atributos (sem os parenteses finais), apesar de serem metodos
// USANDO SETTER
sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 10  // Sera validado pelo Setter e nao sera atribuido
console.log(sequencia.valor, sequencia.valor)


/**
 * O JS sabe se a chamada é para um getter ou um setter pelo contexto lexico, já que ambas são semelhantes.
 * Se o objeto invocar o metodo a ESQUERDA de uma ATRIBIÇÃO, ou isolado de uma atribuição, o metodo invocado será um GETTER.
 * No entanto se a chamada ocorrer a DIREITA da ATRBUIÇÃO, então esta será um SETTER.
 */