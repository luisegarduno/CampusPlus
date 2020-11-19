// require('dotenv').config()
import React from 'react';
import axios from 'axios'
import { Profile } from './Profile';
import { Register } from './Register';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { LoadRegister } from './LoadRegister';

export class WelcomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: '',
            incorrectLogin: false
        }
        this.logIn = this.logIn.bind(this)
   }

    logIn(){
        this.setState({incorrectLogin: false});
        axios.post(process.env.DB_API + '/user/login', {
            username: this.state.userName,
            password: this.state.password
        })
            .then((res) => {
                this.setState({incorrectLogin: true})
                this.history.push('homepages')
            }, (err) => {
                console.log(err)
            })
    }

    newAccount(){
        this.props.history.push("/NewAccount")
    }

    render() {
        return(
        
          <div className="p-5 container">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                        <img src="/logo2.png" alt="" className="img-rounded img-responsive" id = "image" />

                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Username</label>
                                    <input type="text" className="form-control text-light" value = {this.state.userName} onChange ={event => this.setState({userName: event.target.value})} placeholder="StarStudent"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Password</label>
                                    <input type="password" className="form-control text-light"  value = {this.state.password} onChange ={event => this.setState({password: event.target.value})} placeholder="SchoolRules"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="footer">
                        <button className="btn btn-warning rounded" onClick={this.logIn}>Log In</button>
                        <p>OR</p>
                        <button className="btn btn-dark rounded" onClick={() => this.props.history.push("/register")}>Click to Create an Account</button>
                    </div>
                </div>
                </div>
                <h5 className = "text-center">Note: Played with colors to match trial logo and left some pages as they were so we can decide what we like </h5>
            </div>
        );
    }
}