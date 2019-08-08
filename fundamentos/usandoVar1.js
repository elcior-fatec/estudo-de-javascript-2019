{
	{
		{
			{ 
				var sera = 'Será?' 
				console.log(sera) // Dentro do escopo do bloco
			}
		}
	}
}
console.log(sera) // fora do escopo do bloco


function teste(){
	var local = 123
	console.log(local)
}
teste()
// console.log(local) => Não tem acesso ao escopo das variaveis declaradas na função