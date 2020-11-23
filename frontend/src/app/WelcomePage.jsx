import React from 'react';
import axios from 'axios'
import { sha256 } from 'js-sha256';
import logo from "../images/logo2.png"
//import { Profile } from './Profile';
//import { Register } from './login/Register';
import { Redirect, Link } from "react-router-dom";
import { LoginRepository } from '../Api/loginRepository';

export class WelcomePage extends React.Component {

    url = 'http://localhost:8000'
    login = new LoginRepository();

    constructor(props){
        localStorage.setItem('username', null)
        super(props);

        this.state = {
            username: "",
            password: "",
            status: "",
        };

        this.onLogin = this.onLogin.bind(this)
        this.getUsername = this.getUsername.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.validLogin = this.validLogin.bind(this)
        this.invalidLogin = this.invalidLogin.bind(this)
    }
    
    onLogin() {
        // TODO : Create API that checks for hashedpassword instead of plain-text password
        let hashedPassword = sha256(this.state.password);

        var loginData = {username : this.state.username, password : hashedPassword}
        console.log(this.login.verifyUser(loginData))
        
        axios.post(`${this.url}/user/login`, loginData)
            .then(response => {
                if(response.data !== 1 && response.data === false) {
                    this.invalidLogin()
                }
                else {
                    console.log(response.data)
                    this.validLogin(response.data)
                }
        })
    }
    
    getUsername(user) {
        var val = user.target.value;
        this.setState({username : val});
    }

    getPassword(pass) {
        var val = pass.target.value;
        this.setState({password : val});
    }
    
    validLogin(name) {
        localStorage.setItem('username', name);
        this.setState({status : true})
    }

    invalidLogin() {
        alert("Wrong Username/Password");
        this.setState({status : false})
        document.getElementById("loginInfo").reset();
    }

    newAccount(){
        this.props.history.push("/NewAccount")
    }

    render() {
        return( <>
        <header>
            <h1 className = "text-left bg-dark text-white">CampusPlus</h1>
        </header>
        
          <div className="p-5 container">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                        <img src={logo} alt="logo" className="img-rounded img-responsive" id = "image" />

                    <div className = "card-body">
                        <form id="loginInfo">
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Username</label>
                                    <div className = "username" onChange={this.getUsername}>
                                        <input autoComplete="on" type="text" className="form-control mx-auto" name="username" placeholder="StarStudent"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <div className = "password" onChange={this.getPassword}>
                                        <input autoComplete="current-password" type="password" className="form-control mx-auto" name="password" placeholder="Password"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="footer">

                        {(() => {
                            if(this.state.password){
                                return <div>
                                    <button className="btn btn-primary rounded" onClick={this.onLogin}>Log In</button>
                                    { this.state.status ? <Redirect to={"/homepages"}/> : <Redirect to={"/"} /> }
                                </div>
                            }
                            else
                                return <button className="btn btn-primary rounded button disabled" type="button" >Log In</button>
                        })()}

                        <p>OR</p>

                        <Link to="/register">
                            <button className="btn btn-dark rounded">Click to Create an Account</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
}