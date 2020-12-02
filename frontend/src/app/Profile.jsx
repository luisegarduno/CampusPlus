import React from 'react';
//import './Profile.css';
import { sha256 } from 'js-sha256'
import { Header } from './Header';
import { User } from '../models/User'
import { UserRepository } from '../Api/userRepository'

export class Profile extends React.Component {


    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.userID = localStorage['userID'];

        this.state = {
            userInfo: [],
            userID: this.userID,
            username: this.username,
            email: "",
            password: "",
            confirmPassword: "",
            school: "",
            major: "",
            grade: "",
            status: "",
            gradDate: '2022-11-12',
        };

        this.userData = new UserRepository();
        //this.getUsername = this.getUsername.bind(this)
        this.getEmail = this.getEmail.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.getConfirmPassword = this.getConfirmPassword.bind(this)
        this.getSchool = this.getSchool.bind(this)
        this.getMajor = this.getMajor.bind(this)
        this.onUpdate = this.onUpdate.bind(this)
    };

    componentDidMount(){
        this.userData.userDetailsParam(this.userID)
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                this.setState({userInfo:[...this.state.userInfo, new User(ele.userID, ele.username, ele.password, ele.email, ele.school, ele.major, ele.name, ele.grade, ele.isAdmin)]});
                
            });
            console.log(this.state);
        })
        .catch(res => console.log(res));
    };

    //getUsername(name){
        //this.setState({username: name.target.value })
    //};

    getEmail(emailAddress){
        this.setState({email : emailAddress.target.value })
    };

    getPassword(pass1){
        this.setState({ password : pass1.target.value })
    }

    getConfirmPassword(pass2){
        this.setState({ confirmPassword : pass2.target.value })
    }

    getSchool(school){
        this.setState({ school : school.target.value })
    }

    getMajor(major){
        this.setState({ major : major.target.value })
    }


    onUpdate(){
        const { password, confirmPassword } = this.state;
    
        if(password !== confirmPassword){
            alert("Passwords do not match");

            this.setState({ status : false });
            document.getElementById("passwordV1").value = "";
            document.getElementById("passwordV2").value = "";
        }
        else{
            this.setState({ status : true })

            let password = this.state.password;
            password = sha256(password);
            // var loginData = {username : this.state.username, email : this.state.email, password: password, school : this.state.school, major: this.state.major}

            // Update username + password
            var loginData = {username : this.state.username, password : password};
            this.userData.updateCreds(loginData);

            // Update grade, school, major, gradDate
            var profileData = {grade: this.state.grade, school : this.state.school, major : this.state.major, gradDate : this.state.gradDate}
            this.userData.updateProfile(this.state.userID, profileData);

            this.userData.updateEmail(this.state.userID, this.state.email);

        }

    };

    updateProf() {
        console.log("update");

    }


    render(){
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Edit Profile</span>
            </nav>
            <div className = "p-3 container-fluid container-sm">
                <div className="card mb-1 w-75 mx-auto">
                    <div className = "p-1 jumbotron jumbotron-fluid bg-light text-center">
                        <img src="/profileIcon.png" className=" img-fluid w-25 rounded mx-auto d-block" alt="..."/>
                        <button type="submit" className="btn btn-sm btn-primary">Change Image</button>
                    </div>
                    <form className = "p-3">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder=""/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" onChange = {this.getEmail} placeholder=""/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="confirmPassword">Password Confirmation</label>
                                <input type="password" className="form-control" id="confirmPassword"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputSchool">School</label>
                                <input type="text" className="form-control" id="inputSchool"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputMajor">Major</label>
                                <input type="text" className="form-control" id="inputMajor"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="gradYear">Grad Year</label>
                                <select id="gradYear" className="form-control">
                                    <option defaultValue>Choose...</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                </select>
                            </div> 
                        </div>
                        <div className = "text-center">
                            <button type="button" className="btn btn-primary btn-md" onClick={this.updateProf()}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>);
    }
}
