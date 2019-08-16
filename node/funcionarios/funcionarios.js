const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')  // Modulo de client-http - faz requisições em servidores remotos

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})

// Obter a mulher chinesa com menor salario - dica: funções Array