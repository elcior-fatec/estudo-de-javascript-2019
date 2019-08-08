// funcoes construtoras funcionam como Classes da POO
function Carro(velocidadeMaxima = 200, delta = 5) {
	// atributo privado : não usa o this para ser acessado diretamente por um objeto
	let velocidade = 0
	
	// metodo publico : o this permite o acesso direto do objeto ao metodo
	this.acelerar = function() {
		if(velocidade + delta >= velocidadeMaxima) {
			velocidade = velocidadeMaxima
		} else {
			velocidade += delta
		}
	}

	this.getVelocidade = _ => velocidade
}

// testando a criacao de dois objetos do tipo Carro
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidade())