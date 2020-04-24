//import {soma as somaFunction} from './funcoes'
import soma, { sub } from '../funcoes'
import axios from 'axios'
const minhaPromise = () => new Promise((resolve,reject) => {
    setTimeout(() => {resolve('OoK')}, 2000)
})

minhaPromise().then(response => {
    console.log(response);
})

async function executaPromisse(){
    const response = await minhaPromise()

    console.log(response)
}

executaPromisse()

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }
}

Api.getUserInfo('ThiagoViana07')