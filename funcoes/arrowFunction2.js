function Pessoa() {
    this.idade = 0

    // A funcao arrow varia conforme que o chama, assim não usamos bind nem uma variavel auxiliar
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa