import axios from 'axios'

export class AssignmentRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';

    // GET returns specified assignment : http://localhost:8000/assignment/:assignmentID
    getAssignment(assignmentID){
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/${assignmentID}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // GET all assignments for a user : http://localhost:8000/assignment/user/:userID
    getAssignments(userID) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/user/${userID}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // GET all of a user's assignments for a given class : http://localhost:8000/assignment/:userID/class/:courseID
    getAssignmentsClass(userID,courseID) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/${userID}/class/${courseID}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // GET all of a user's assignments for a given type : http://localhost:8000/assignment/:userID/type/:assignmentType
    getAssignmentsTypes(userID,assignmentType) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/${userID}/type/${assignmentType}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // GET all of a user's assignments for a given type : http://localhost:8000/assignment/:userID/completion/:completionStatus
    getAssignmentsStatus(userID, completionStatus) {
        return new Promise((resolve,reject) => {
            axios.get(`${this.url}/assignment/${userID}/completion/${completionStatus}`)
                .then(x => {
                resolve(x.data);
            })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }


    // POST Create new assignment : http://localhost:8000/assignment/:userID/:courseID
    createAssignment(userID, assignmentData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/assignment/${userID}`, assignmentData)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }


    // PUT Change name of the assignment : http://localhost:8000/assignment/:assignmentID/name
    updateName(assignmentID, name){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}/name`, name)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT Change description of the assignment : http://localhost:8000/assignment/:assignmentID/description
    updateDescription(assignmentID, description){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}/desc`, description)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT Change due date of the assignment : http://localhost:8000/assignment/:assignmentID/date
    updateDate(assignmentID, dueDate){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}/date`, dueDate)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // PUT Change the assignment type : http://localhost:8000/assignment/:assignmentID/type
    updateType(assignmentID, assignmentType){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}/type`, assignmentType)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }


    // PUT Mark assignment as complete/incomplete : http://localhost:8000/assignment/:assignmentID/completion
    updateCompletion(assignmentID, completionStatus){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}/completion`, completionStatus)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // PUT updates assignment depending on assignmentID : http://localhost:8000/assignment/:assignmentID
    updateAssignment(assignmentID, body){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/assignment/${assignmentID}`, body)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }

    // DELETE deletes assignment depending on assignmentID : http://localhost:8000/assignment/:assignmentID
    deleteAssignment(assignmentID) {
            return new Promise((resolve, reject) => {
                axios.delete(`${this.url}/assignment/${assignmentID}`, this.config)
                    .then(x => resolve(x.data))
                        alert("Assignment has been deleted")
            });
    }
}