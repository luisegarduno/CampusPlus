import React from "react";
import axios from 'axios';
import { sha256 } from 'js-sha256'
import { UserRepository } from '../../Api/userRepository'
import { Redirect } from "react-router-dom";

export class Register extends React.Component{

    login = new UserRepository()
    config = {
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            school: "",
            major: "",
            status: "",
        };

        this.getEmail = this.getEmail.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getConfirmPassword = this.getConfirmPassword.bind(this);
        this.getSchool = this.getSchool.bind(this);
        this.getMajor = this.getMajor.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    getEmail(emailAddress){
        this.setState({ email : emailAddress.target.value })
    }

    getUsername(name){
        this.setState({ username : name.target.value })
        localStorage.setItem('username', this.state.username);
    }

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

    onRegister(){
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
            var loginData = {email : this.state.email, password: password, username : this.state.username, school : this.state.school, major: this.state.major }
            //console.log(this.login.registerUser(loginData))
        
            //axios.post(`${this.url}/user/create`, loginData)
            //    .then(response => {
            //        if(response.data !== 1 && response.data === false) {
            //            this.invalidLogin()
            //        }
            //        else {
            //            console.log(response.data)
            //            this.validLogin(response.data)
            //        }
            //})

            axios.post(`${this.login.url}/user/create`, loginData)
                .then(x => { this.storeInfo(this.state.username);
            })
            

        }
    }

    async getUserID(username) {
        return (await this.login.userDetailsBody({username}))[0];
    }

    async storeInfo(name) {
        localStorage.setItem('username', name);
        var uid = (await this.getUserID(name)).userID;
        console.log(uid);
        localStorage.setItem('userID', uid);
        this.setState({status : true})
    }


    render() {
        return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="mb-0 h3 text-white font-weight-bold">Campus</span>
                <span className="mb-0 h3 text-primary font-weight-bold">Plus</span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <form className="form-inline ">
                        <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/login")}>Return</button>
                    </form>
                </div>
            </nav>
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Register</span>
            </nav>
            <div className="p-3 container-fluid container-sm">
                <div className = "card text-center mb-1 w-75 mx-auto">
                    <div className = "jumbotron-fluid h-75 bg-primary text-white text-center">
                        <h4 className="p-4 card-title font-weight-bold">Register</h4>
                    </div>
                    <div className = "form-group">
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Student Email</label>
                                    <div className = "email" onChange = {this.getEmail}>
                                        <input name="email" type="email" autoComplete="on" className="form-control mx-auto" placeholder="JDoe@uni.edu"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Username</label>
                                    <div className = "username" onChange = {this.getUsername}>
                                        <input name="username" type="text" className="form-control mx-auto" placeholder="JDoe"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <div className = "password" onChange = {this.getPassword}>
                                        <input id="passwordV1" autoComplete="current-password" name="password" type="password" className="form-control mx-auto" placeholder="SecretCode"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">Confirm Password</label>
                                    <div className = "password" onChange = {this.getConfirmPassword}>
                                        <input id="passwordV2" autoComplete="current-password" name="confirmPassword" type="password" className="form-control mx-auto" placeholder="SecretCode"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">School</label>
                                    <div className = "school" onChange = {this.getSchool}>
                                        <input name="school" type="text" className="form-control mx-auto" placeholder="Southern Methodist University"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label for="exampleFormControlInput1">Major</label>
                                    <div className = "major" onChange = {this.getMajor}>
                                        <input name="major" type="text" className="form-control mx-auto" placeholder="Computer Science"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        {(() => {
                            if(this.state.email && this.state.username && this.state.password && this.state.confirmPassword){
                                return <div>
                                    <button type="button" className="btn btn-primary rounded" onClick={this.onRegister}>Complete Registration</button>
                                    { this.state.status ? <Redirect to={"/home"}/> : <Redirect to={"/register"} /> }
                                </div>
                            }
                            else
                                return <button className="btn btn-primary rounded button disabled" type="button" >Register</button>    
                        })()}
                    {/* <button className="btn btn-primary rounded" onClick={() => this.props.history.push("/homepages")}>Complete Registration</button> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )}
}
