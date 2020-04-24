var usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
var idade = usuarios.map(item => item.idade)
console.log(idade)

//Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos
//[{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]   

const rockseat = usuarios.filter(function(item){
  return item.idade > 18 && item.empresa == 'Rocketseat'
})

console.log(rockseat);

//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const google = usuarios.find(item => item.empresa == 'Google')

console.log(google)

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
//no máximo 50 anos:

const calculo = usuarios.map(item => ({...item, idade : item.idade * 2})).filter(item => item.idade <= 50)
console.log(calculo)

