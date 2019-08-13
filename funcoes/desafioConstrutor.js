class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Olá, ${this.nome}!`)
    }
}
const p1 = new Pessoa('Aline')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Olá, ${nome}!`)
    }
}
const p2 = criarPessoa('Ana')
p2.falar()


function construirPessoa(nome = 'anonimo') {
    return {
        falar: function(){
            console.log(`Olá, ${nome}!`)
        }
    }
}
const p3 = construirPessoa('Amanda')
p3.falar()