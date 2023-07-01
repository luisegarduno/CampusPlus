import React from 'react';
//import { sha256 } from 'js-sha256'
import { Header } from './Header';
import { User } from '../models/User'
import { UserRepository } from '../Api/userRepository'

export class EditProfile extends React.Component {


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
            gradDate: "",
            status: ""
        };

        this.userData = new UserRepository();
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

    updateProf() {
        console.log("Update:", this.state.username, this.state.password);
        if ((this.state.password !== "") && (this.state.password === this.state.confirmPassword)) {
            this.userData.updateCreds({ username: this.state.username, password: this.state.password });
        } else if (this.state.password !== this.state.confirmPassword) {
             alert("Passwords do not match");
        }
        if ((this.state.email !== "")) {
            console.log(this.state.email);
            this.userData.updateEmail(this.state.userID, { email: this.state.email });
        }
        console.log({ grade: this.state.grade, school : this.state.school, major : this.state.major, gradDate : this.state.gradDate });
        this.userData.updateProfile(this.state.userID, { grade: this.state.grade, school: this.state.school, major: this.state.major, gradDate: this.state.gradYear });
        this.props.history.push("/profile")
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
                    </div>
                    <form className = "p-3">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" value={this.state.username} readOnly/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" onChange={e => this.setState({password: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="confirmPassword">Password Confirmation</label>
                                <input type="password" className="form-control" id="confirmPassword" onChange={e => this.setState({confirmPassword: e.target.value})}/>
                            </div>
                        </div>
                         <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="" onChange={e => this.setState({email: e.target.value})}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="inputSchool">School</label>
                            <input type="text" className="form-control" id="inputSchool" onChange={e => this.setState({school: e.target.value})}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputMajor">Major</label>
                                <input type="text" className="form-control" id="inputMajor" onChange={e => this.setState({major: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputGrade">Grade</label>
                                <input type="text" className="form-control" id="inputGrade" onChange={e => this.setState({grade: e.target.value})}/>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="gradDate">Grad Date</label>
                                <input type="date" id="gradDate" className="form-control" onChange={e => this.setState({gradDate: e.target.value})} />
                            </div> 
                        </div>
                        <div className = "text-center">
                            <button type="button" className="btn btn-primary btn-md" onClick={() => this.props.history.push("/profile")}>Cancel</button>
                            <button type="button" className="btn btn-primary btn-md" onClick={() => this.updateProf()}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>);
    }
}
