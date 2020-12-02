import React from 'react';
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";

export class GuestHome extends React.Component {

     state = {
     }
    
     render() {
         return(<>   

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <span className="mb-0 h3 text-white font-weight-bold">Campus</span>
            <span className="mb-0 h3 text-primary font-weight-bold">Plus</span>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <form className="form-inline ">
                    <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/login")}>LOG OUT</button>
                </form>
            </div>
        </nav>
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Guest Home</span>
        </nav>

         <div className = "p-4 container-fluid container-md">
         <form className="mb-1 w-75 mx-auto mb-auto">
         <header className = "p-1">
                 <h3 className = "text-center text-dark font-weight-bold">Welcome, Guest!</h3>
             </header>
            <div className = " p-3 card-deck row-cols-2 row align-items-center">
                <div className="card">
                    <img src="/schedule.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-auto my-auto text-white btn-sm rounded" onClick={() => this.props.history.push("/courselist")}>Courses Offered</button>
                </div>
                <div className="card">
                    <img src="/forum.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary mx-auto my-auto text-white btn-sm rounded" onClick={() => this.props.history.push("/forum")}>Course Forum</button>
                </div>
             </div>
             </form>
        </div>
         </> 
         );
        
     }//end Render
 }//end Home
