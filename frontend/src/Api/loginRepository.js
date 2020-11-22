import axios from 'axios'

export class LoginRepository {

    url = 'http://localhost:8000'
    config = {
    }
    
    registerUser(){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/create`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    verifyUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/user/login`, loginData, this.config)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

}