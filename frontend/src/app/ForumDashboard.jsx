import React from 'react';
//import { CommentRepository } from '../Api/commentRepository';
import { ClassesRepository } from '../Api/classesRepository';
import { Course } from '../models/Course';
import { Header } from './Header';
import {Link } from 'react-router-dom';

export class ForumDashboard extends React.Component {

    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.classID = localStorage['classID'];

        this.state = {
            classes: [],
        };

        this.courseRepo = new ClassesRepository();
    }//end state


    componentDidMount(){
        this.courseRepo.getCourseList()
        .then(res => {
            res.forEach(ele => {
                this.setState({classes:[...this.state.classes, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd, ele.teacherName)]});
            });
        })
        .catch(res => console.log(res));
    }


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
                    <a className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 text-white">Active Threads</h5>
                        </div>
                    </a>

                    { this.state.classes.map((x) =>
                    
                    <Link key ={x.classID} className="list-group-item list-group-item-action" to = {`/course_reviews/${x.classID}`}>
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1 font-weight-bold">{x.classID}</h5>
                            <small className="text-muted align-items-right">3 days ago</small>
                        </div>
                        <p className="mb-1 ">{x.description}</p>
                        <small className="text-muted">Comment Count: </small>
                        <span className="badge badge-primary badge-pill"> 14</span>
                        </Link>
                    )}
                </div>

                <div className="p-3 list-group">
                    <a className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Archived Threads</h5>
                        </div>
                    </a>
                    
                    <a className="list-group-item list-group-item-action">
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