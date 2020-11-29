import React from 'react';
//import './Profile.css';
import { Header } from './Header';

export class Profile extends React.Component {

    render(){
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Edit Profile</span>
            </nav>
            <div className = "p-3 container-fluid container-sm">
                <div class="card mb-1 w-75 mx-auto">
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
                            <input type="text" className="form-control" id="email" placeholder=""/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="password">Password</label>
                                <input type="email" className="form-control" id="password"/>
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
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div> 
                        </div>
                        <div className = "text-center">
                            <button type="submit" className="btn btn-primary btn-md">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>);
    }
}
