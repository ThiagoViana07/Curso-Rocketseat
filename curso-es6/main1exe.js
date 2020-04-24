class Usuario{
  constructor(email, senha){
    this.email = email
    this.senha = senha
    
  }

  isAdmin(){
    return this.admin == true;
  }

}

class Admin extends Usuario{
  constructor(){
    super()
    this.admin = true
  }
}


const user1 = new Usuario('email@teste.com.br','123')
const admin1 = new Admin('email@teste.com.br','123')

console.log(user1.isAdmin()) //false
console.log(admin1.isAdmin()) //true