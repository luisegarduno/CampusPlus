import axios from 'axios'

export class LoginRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';
    
    registerUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/create`, loginData)
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
            axios.post(`${this.url}/user/login`, loginData)
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