import axios from 'axios'

export class CommentRepository {

    // Leave this here
    url = false ? 'http://44.233.149.216:8000' : 'http://localhost:8000';
    
    // GET returns all comments : http://localhost:8000/comment
    getComments(loginData){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/comment/`, loginData)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // GET a comment by commentID : http://localhost:8000/comment/:commentID
    getComments(commentID){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/comment/${commentID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // GET all of the comments associated w/ a user : http://localhost:8000/comment/user/:userID
    getUserComments(userID){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/comment/user/${userID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // GET all of the comments associated w/ a class : http://localhost:8000/comment/class/:classID
    getClassComments(classID){
        return new Promise((resolve,reject) =>{
            axios.get(`${this.url}/comment/class/${classID}`)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }

    // POST Adds a comment to a class : http://localhost:8000/comment/:userID/:classID
    addClassComment(userID, classID, title, body){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/comment/${userID}/${classID}`, title, body)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        });
    }


    // PUT Edit the title of a specific title: http://localhost:8000/comment/:commentID/title
    editTitle(commentID, title){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/comment/${commentID}/title`, title)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }


    // PUT Edit the body of a specific comment: http://localhost:8000/comment/:commentID/body
    editBody(commentID, body){
        return new Promise((resolve,reject) =>{
            axios.put(`${this.url}/comment/${commentID}/body`, body)
                .then(x => {
                    resolve(x.data);
                })
            .catch(x => {
                alert(x);
                reject(x);
            })
        })
    }


    // DELETE deletes the comment with passed in commentID: http://localhost:8000/comment/:commentID
    deleteComment(commentID) {
            return new Promise((resolve, reject) => {
                axios.delete(`${this.url}/comment/${commentID}`, this.config)
                    .then(x => resolve(x.data))
                        alert("Comment has been deleted")
            });
    }


    verifyUser(loginData){
        return new Promise((resolve,reject) =>{
            axios.post(`${this.url}/comment/user/login`, loginData)
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