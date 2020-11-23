import React from "react";
import axios from 'axios';
import { sha256 } from 'js-sha256'
import { LoginRepository } from '../../Api/loginRepository'
import { Redirect } from "react-router-dom";

export class Register extends React.Component{

    url = 'http://localhost:8000'
    login = new LoginRepository()
    config = {
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            status: "",
        };

        this.getEmail = this.getEmail.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getConfirmPassword = this.getConfirmPassword.bind(this);
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
            password = sha256(this.state.password);
            var loginData = {email : this.state.email, password: password, username : this.state.username}
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

            axios.post(`${this.url}/user/create`, loginData)
        }
    }

    render() {
        return(<>
            <div className ="header">
                <h1 className = "text-left bg-dark text-white">CampusPlus
                    <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Return</button>
                </h1>
            </div>
            <div className="p-5 container-sm">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                        <div className= "card-header">
                            <h5 className="card-title">Register</h5>
                        </div>
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
                        </form>
                    </div>
                    <div className="footer">
                        {(() => {
                            if(this.state.email && this.state.username && this.state.password && this.state.confirmPassword){
                                return <div>
                                    <button type="button" className="btn btn-primary rounded" onClick={this.onRegister}>Complete Registration</button>
                                    { this.state.status ? <Redirect to={"/homepages"}/> : <Redirect to={"/register"} /> }
                                </div>
                            }
                            else
                                return <button className="btn btn-primary rounded button disabled" type="button" >Complete Registration</button>    
                        })()}
                    {/* <button className="btn btn-primary rounded" onClick={() => this.props.history.push("/homepages")}>Complete Registration</button> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )}
}