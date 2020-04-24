// 6º Exercício
// Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

console.log(`O usuário ${usuario} possui ${idade} anos`);


// 7º exercício
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
const nome = 'Diego';
//const idade = 23;
// const usuario = {
//  nome: nome,
//  idade: idade,
//  cidade: 'Rio do Sul',
// };

const usuario2= {
    nome,
    idade,
    cidade: 'Rio do Sul',
}

console.log(usuario2)