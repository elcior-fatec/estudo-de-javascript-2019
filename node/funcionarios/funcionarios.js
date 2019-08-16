const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')  // Modulo de client-http - faz requisições em servidores remotos

/*axios.get(url).then(response => {
    const funcionarios = response.data

    // Obter a mulher chinesa com menor salario - dica: funções Array
    const mulher = funcionario => funcionario.genero === 'F'
    const chines = funcionario => funcionario.pais === 'China'
    const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

    console.log(funcionarios.filter(chines).filter(mulher).reduce(menorSalario))
})*/

const idFunc = funcionario => funcionario.id
const empresa = funcionario => funcionario.empresa
const pais = funcionario => funcionario.pais
const salario = funcionario => funcionario.salario

const mulher = funcionario => funcionario.genero === 'F'
const brasileiro = funcionario => funcionario.pais === 'Brazil'
const trabalhamLeenti = funcionario => funcionario.empresa === 'Leenti'
const ganhamMaisDe20K = funcionario => funcionario.salario > 20000

const somaSalario = (salAcumulado, salAtual) => salAcumulado + salAtual


axios.get(url).then(response => {
    const funcionarios = response.data
    
    // id das mulheres brazileiras
    console.log(funcionarios.filter(brasileiro).filter(mulher).map(idFunc))

    // Empresa, em ordem alfabetica, dos funcionarios que ganham mais de 20000.00
    console.log(funcionarios.filter(ganhamMaisDe20K).map(empresa).sort())

    // Pais, em ordem alfabetica, dos funcionarios que trabalham para a empresa 'Leenti'
    console.log(funcionarios.filter(trabalhamLeenti).map(pais).sort())

    // Soma de salarios dos funcionarios da Leenti
    const todosSalarios = funcionarios.filter(trabalhamLeenti).map(salario).reduce(somaSalario)
    const todosFuncionarios = funcionarios.filter(trabalhamLeenti).length
    console.log(`$${(todosSalarios / todosFuncionarios).toFixed(2).replace('.', ',')}`)
})