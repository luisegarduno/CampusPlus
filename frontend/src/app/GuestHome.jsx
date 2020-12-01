import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { Header } from './Header';

export class GuestHome extends React.Component {

     state = {
     }
    
     render() {
         return(<>   

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <span className="mb-0 h3 text-white">Campus</span>
            <span className="mb-0 h3 text-primary">Plus</span>
            <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <form className="form-inline ">
                    <button className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/welcomepages")}>LOG OUT</button>
                </form>
            </div>
        </nav>
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Guest Home</span>
        </nav>

         <div className = "p-4 container-fluid container-sm w-50">
             <header className = "p-3 text-center">
                 <h1 className = " p-2 text-dark">Welcome, Guest!</h1>
             </header>
            <div className = " p-3 card-deck row-cols-2 row align-items-center">
                <div className="card">
                    <img src="/schedule.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/courselists")}>Courses Offered</button>
                </div>
                <div className="card">
                    <img src="/forum.png" className="p-3 card-img-top" alt="..."/>
                        <button className="btn btn-primary text-white btn-sm rounded" onClick={() => this.props.history.push("/forumReviews")}>Course Forum</button>
                </div>
             </div>
        </div>
         </>
            
         );
        
     }//end Render
 }//end Home
