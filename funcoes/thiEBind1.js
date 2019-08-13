const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO
// Ao atribuir a funcao a uma variavel nos alteramos o contexto do 'this'

// USANDO BIND PARA AMARRAR O CONTEXTO DA FUNCAO
const falarDePessoa = pessoa.falar.bind(pessoa) 
// Agora a funcao falar (que foi declarada em pessoa, mas não é mais de pessoa) esta amarrada ao objeto pessoa (parametro passado para bind)
// No entento não estamos chamando a funcao pessoa.falar(), o bind() cria uma nova funcao que esta sim esta amarrada ao objeto pessoa
falarDePessoa()

const falar2 = pessoa.falar // Testando a não alteracao do pessoa.falar()
falar2() // Continua 'undefined'