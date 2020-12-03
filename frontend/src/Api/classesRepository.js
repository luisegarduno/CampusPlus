import axios from 'axios'

export class ClassesRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';

    getCourseList(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/classes`, this.config)
                .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
   }


    getCourses(classID){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/classes/user/${classID}`, this.config)
                .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
   }

    // GET all of the classes on a students schedule : http://localhost:8000/classes/user/:userID
    getStudentSchedule(userID) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/classes/user/${userID}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // DO NOT CONNECT YET
    // POST Adds a class to the users schedule (don't need to pass in classID) : http://localhost:8000/classes/:userID/
    appendClassToUser(userID){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/classes/${userID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // DELETE deletes a course from a students schedule according to the class ID : http://localhost:8000/classes/:userID/:classID
    deleteUserClass(userID, classID) {
            return new Promise((resolve, reject) => {
                axios.delete(`${this.url}/classes/${userID}/${classID}`)
                    .then(x => resolve(x.data))
                        alert("Class has been deleted from student's schedule")
            });
    }
    
}