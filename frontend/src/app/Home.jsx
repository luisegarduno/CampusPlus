import React from 'react';
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";


export class Home extends React.Component {
    username;

    constructor(props){
        super(props);
        this.username = localStorage['username']
     }
    
    render() {
        return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item nav-link">
                    <a href="/homepages" className="mb-0 h3 text-white">Campus</a>
                    <a href="/homepages" className="mb-0 h3 text-primary">Plus</a>
                </li>
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <form className="form-inline ">
                    <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/welcomepages")}>LOG OUT</button>
                </form>
            </div>
        </nav>
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Home</span>
        </nav>
         <div className = "p-4 container-fluid container-sm w-50">
             <header className = "p-3">
                 <h2 className = "p-2 text-center text-dark">Welcome, {this.username}!</h2>
             </header>
            <div className = " p-3 card-deck row-cols-2 row align-items-center">
                <div className="card">
                    <img src="/profileIcon.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/profiles")}>Edit Profile</button>
                </div>
                <div className="card">
                    <img src="/rightCalendar.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/calendars")}>View Calendar</button>
                </div>
                <div className="card">
                    <img src="/assignments.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/assignments")}>Add Assignments</button>
                </div>
             </div>
            <div className = " p-3 card-deck row-cols-2 row align-items-center">
                <div className="card">
                    <img src="/archive.png" className="p-2 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/finishedAssignments")}>Archived Assignments</button>
                </div>
                <div className="card">
                    <img src="/schedule.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/courses")}>View Courses</button>
                </div>
                <div className="card">
                    <img src="/forum.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded">Chat Forum</button>
                </div>
             </div>
        </div>
         </>
            
         );
        
     }//end Render
 }//end Home
