import React from 'react';
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

export class Home extends React.Component {

     state = {
     }
    
     render() {
         return(<>
          <div className ="header">
            <h1 className = "text-left bg-dark text-white">CampusPlus
                <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
            </h1> 
        </div>
         <div className = "p-3 container-sm">
            <h2 className = " p-2 text-center bg-dark text-white">Welcome, Name!</h2>
            <div className = " p-3 card-deck row-cols-2">
                <div className="card">
                    <img src="/profileIcon.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/profiles")}>Edit Profile</button>
                </div>
                <div className="card">
                    <img src="/calendar2.jpg" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/calendars")}>View Calendar</button>
                </div>
                <div className="card">
                    <img src="/assignments.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/assignments")}>Add Assignments</button>
                </div>
             </div>
            <div className = " p-3 card-deck row-cols-2">
                <div className="card">
                    <img src="/archive.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/profiles")}>Archived Assignments</button>
                </div>
                <div className="card">
                    <img src="/schedule.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/schedules")}>View Schedule And Courses</button>
                </div>
                <div className="card">
                    <img src="/forum.png" className="card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/homepages")}>Chat Forum</button>
                </div>
             </div>
        </div>
         </>
            
         );
        
     }//end Render
 }//end Home