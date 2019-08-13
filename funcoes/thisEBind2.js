function Pessoa() {
    this.idade = 0

    // Dispara uma funcao apos um determinado intervalo de tempo em milisegundos
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
    // Observe que quem dispara a funcao e o setInterval(), por isso o this não se refere mais ao objeto/funcao Pessoa
}

/*new Pessoa*/ // NaN : Pq que executa o codigo e o temporizador, não o objeto de Pessoa


function Pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // Amarramos o this desta funcao ao objeto em que foi escrito (os objetos de Pessoa2)
}

// new Pessoa2


function Pessoa3() {
    this.idade = 0

    const self = this // Amarramos o valor de this a uma constante. O this varia, mas a constante amarrou a referencia
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa3