import axios from 'axios'

export class ClassesRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';

    getCourseList(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/courses`, this.config)
                .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
   }


    getCourses(courseID){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/courses/user/${courseID}`, this.config)
                .then(x => resolve(x.data))
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
   }

    // GET all of the classes on a students schedule : http://localhost:8000/courses/user/:userID
    getStudentSchedule(userID) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/courses/user/${userID}`)
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
    // POST Adds a class to the users schedule (don't need to pass in courseID) : http://localhost:8000/courses/:userID/
    appendClassToUser(userID){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/courses/${userID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // DELETE deletes a course from a students schedule according to the class ID : http://localhost:8000/courses/:userID/:courseID
    deleteUserClass(userID, courseID) {
            return new Promise((resolve, reject) => {
                axios.delete(`${this.url}/courses/${userID}/${courseID}`)
                    .then(x => resolve(x.data))
                        alert("Class has been deleted from student's schedule")
            });
    }
    
}