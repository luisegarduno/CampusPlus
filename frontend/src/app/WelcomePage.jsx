import React from 'react';
import { Profile } from './Profile';
import { Register } from './Register';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { LoadRegister } from './LoadRegister';

export class WelcomePage extends React.Component {
   
    user
   
    state = {
        userName: '',
        password: '',
        incorrectLogin: false
    }
    logIn(){
        this.setState({incorrectLogin: false});

        var loginInData = {userName: this.state.userName, password: this.state.password}

    }

    newAccount(){
        this.props.history.push("/NewAccount")
    }


    render() {
        return(
          <div className="p-5 container-sm">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                    <div className= "card-header">
                        <h5 className="card-title">Sign In</h5>
                        <img src="http://placehold.it/100x200" alt="" className="img-rounded img-responsive" id = "image" />
                    </div>
                   
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                               
                                <div className="form-group col text-left">
                               
                                    <label htmlFor="exampleFormControlInput1">Username</label>
                                    <input type="text" className="form-control" value = {this.state.userName} onChange ={event => this.setState({userName: event.target.value})} placeholder="JohnDoeRules"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <input type="password" className="form-control" value = {this.state.password} onChange ={event => this.setState({password: event.target.value})} placeholder="SecretCode"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                   
                                   
                                </div>
                            </div>
                        </form>
                    </div>
               
                    <div className="footer">

                    <button className="btn btn-lg btn-primary" onClick={() => this.logIn()}>Log In</button>
                    <button className="btn btn-lg btn-primary" onClick={() => this.props.history.push("/register")}>Create Account</button>
                   
                </div>
                </div>
                </div>
                
            </div>

         
        );
    }
}