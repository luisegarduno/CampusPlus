import React from 'react';
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
            gradYear: "",
            status: ""
        };

        this.userData = new UserRepository();
    };

    componentDidMount(){
        this.userData.userDetailsParam(this.userID)
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                this.setState({userInfo:[...this.state.userInfo, new User(ele.userID, ele.username, ele.email, ele.isAdmin, ele.password, ele.grade, ele.school, ele.major, ele.name, ele.gradDate)]});
                
            });
            console.log(this.state);
        })
        .catch(res => console.log(res));
    };

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
                    </div>
                    <form className = "p-3">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" value={this.state.username} readOnly/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" value={this.state.password} readOnly/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="confirmPassword">Password Confirmation</label>
                                <input type="password" className="form-control" id="confirmPassword" readOnly/>
                            </div>
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="" value={this.state.email} readOnly/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="inputSchool">School</label>
                            <input type="text" className="form-control" id="inputSchool" value={this.state.school} readOnly/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputMajor">Major</label>
                                <input type="text" className="form-control" id="inputMajor" value={this.state.major} readOnly/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputGrade">Grade</label>
                                <input type="text" className="form-control" id="inputGrade" value={this.state.grade} readOnly/>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="gradYear">Grad Year</label>
                                <input type="date" id="gradYear" className="form-control" value={this.state.gradYear} readOnly />
                            </div>
                        </div>
                        <div className = "text-center">
                            <button type="button" className="btn btn-primary btn-md" onClick={() => this.props.history.push("/home")}>Home</button>
                            <button type="button" className="btn btn-primary btn-md" onClick={() => this.props.history.push("/profile/edit")}>Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>);
    }
}
