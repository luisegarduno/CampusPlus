import axios from 'axios'

export class UserRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';
    
    // POST Create User : http://localhost:8000/user/create
    registerUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/user/create`, loginData)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // POST Verify User : http://localhost:8000/user/login
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

    // GET Returns all information depending on username (passed into the BODY) : http://localhost:8000/user/
    userBody(username){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/`, username)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // GET Returns all information depending on userID (passed as request parameter): http://localhost:8000/user/:userID
    userInfo(userID){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/user/${userID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT update username + password : http://localhost:8000/user/
    updateCreds(loginData){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/user/`,loginData)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT update profile : http://localhost:8000/user/:userID/updateProfile
    updateProfile(userID, grade, school, major, gradDate){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/user/${userID}/updateProfile`, grade, school, major, gradDate)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT update Email : http://localhost:8000/user/:userID/updateEmail
    updateEmail(userID, email){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/user/${userID}/updateEmail`, email)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // DELETE deletes user depending on userID : http://localhost:8000/user/:userID
    deleteUser(userID) {
            return new Promise((resolve, reject) => {
                axios.delete(`${this.url}/user/${userID}`, this.config)
                    .then(x => resolve(x.data))
                        alert("User has been deleted")
            });
    }
    
}