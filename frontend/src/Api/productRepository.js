import axios from 'axios'
export class ProductRepository {
    url = 'http://localhost:8000';
    config = {
    }
    getAssignments(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/api/assignmentss/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }
    addAppointment(form) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/api/assignmentss`, form, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        })
    }
    login(loginData) {
        return new Promise((resolve, reject) => {
            axios
            .post(`${this.url}/user/login`, loginData, this.config)
            .then(res => {
                resolve(res.data)
                if(!res.data){
                    console.log("nope");
                }
            })
            .catch(res => resolve({ error: "Wrong Username or Password"}));
        });
    }
}