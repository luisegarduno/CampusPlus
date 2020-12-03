import React from 'react';
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";


export class Home extends React.Component {

    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.userID = localStorage['userID'];
     }
    
    render() {
        return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item nav-link">
                    <a href="/home" className="mb-0 h3 text-white font-weight-bold">Campus</a>
                    <a href="/home" className="mb-0 h3 text-primary font-weight-bold">Plus</a>
                </li>
            </ul>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <form className="form-inline ">
                    <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/login")}>LOG OUT</button>
                </form>
            </div>
        </nav>
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Home</span>
        </nav>

         <div className = "p-2 container-fluid container-md">
         <form className="mb-1 w-75 mx-auto mb-auto">
             <header className = "p-1">
                 <h3 className = "text-center text-dark font-weight-bold">Welcome, {this.username}!</h3>
             </header>
            <div className = "p-2 card-deck row-cols-3 row align-items-center">
                <div className="p-1 card h-100 w-100">
                    <img src="/profileIcon.png" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button type="button" className="btn btn-primary mx-md-1 text-white btn-sm rounded" onClick={() => this.props.history.push("/profile")}>Profile</button>
                </div>
                <div className="p-1 card h-100 w-100">
                    <img src="/rightCalendar.png" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-md-1 text-white btn-sm rounded" onClick={() => this.props.history.push("/calendar")}>View Calendar</button>
                </div>
                <div className="p-1 card h-100 w-100">
                    <img src="/assignments.png" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-md-1 text-white btn-sm rounded" onClick={() => this.props.history.push("/assignments")}>Current Assignments</button>
                </div>
             </div>
            <div className = " p-2 card-deck row-cols-3 row align-items-center">
                <div className="p-1 card h-100 w-100">
                    <img src="/archive.png" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-md-1 text-white btn-sm rounded overflow-hidden" onClick={() => this.props.history.push("/finished_assignments")}>Archived Assignments</button>
                </div>
                <div className="p-1 card h-100 w-100">
                    <img src="/schedule.png" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-md-1 text-white btn-sm rounded" onClick={() => this.props.history.push("/courses")}>View Courses</button>
                </div>
                <div className="p-1 card h-100 w-100">
                    <img src="/people.jpg" className="p-1 img-fluid card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded overflow-hidden" onClick={() => this.props.history.push("/aboutUs")}>About Us</button>
                </div>
             </div>
             </form>
        </div>
         </>
            
         );
        
     }//end Render
 }//end Home
