import React from 'react';
import { Header } from './Header';
//import { Comment } from '../models/Comment';

export class ForumDashboard extends React.Component {

    render() {
        return <>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Course Review Forum</span>
            </nav>
            
            <div className="p-4 container-fluid container-md">
                <div className = "jumbotron-fluid bg-white text-center">
                    <h5 className="display-4 text-dark font-weight-bold">Course Forum </h5>
                    <div className = "row justify-content-center">
                        <button className="btn btn-dark text-white btn-sm rounded">Create New Thread</button>
                    </div>
                </div>
                <div className="p-3 list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Active Threads</h5>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 font-weight-bold">Graphical User Interface Reviews</h5>
                            <small className="text-muted align-items-right">3 days ago</small>
                        </div>
                        <p className="mb-1 ">Reviews for a CS Class at SMU</p>
                        <small className="text-muted">Comment Count: </small>
                        <span className="badge badge-primary badge-pill"> 14</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 font-weight-bold" >Art History</h5>
                            <small className="text-muted align-items-right">5 days ago</small>
                        </div>
                        <p className="mb-1">What is Meadows Like</p>
                        <small className="text-muted">Comment Count: </small>
                        <span className="badge badge-primary badge-pill"> 5</span>
                    </a>
                </div>

                <div className="p-3 list-group">
                    <a href="#" className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Archived Threads</h5>
                        </div>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 font-weight-bold">KNW 2300</h5>
                            <small className="text-muted align-items-right">15 days ago</small>
                        </div>
                        <p className="mb-1">A reminder of our torture</p>
                        <small className="text-muted">Comment Count: </small>
                        <span className="badge badge-primary badge-pill"> 7</span>
                    </a>
                </div>
            </div>
        </>
    }
}
