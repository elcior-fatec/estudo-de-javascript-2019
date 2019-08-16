require('./global')  
// O modulo ./global não retorna nenhum dados, por isso ele não precisa ser atribuido a uma variavel
// O simples fato de importar (chamar ao escopo deste modulo) o modulo já o adicina no contexto do programa

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!'  // Sobre escreve o atributo global. Não é uma boa prática!
console.log(minhaApp.nome)

minhaAppCongelada.nome = 'Epa epa!'  // O atributo não é sobrescrito pq o objeto foi congelado
console.log(minhaAppCongelada.nome)