import React from "react";
import _ from 'lodash';
import { Header } from './Header';
import { Course } from '../models/Course';
import { Assignment } from '../models/Assignment'
import { ClassesRepository } from "../Api/classesRepository";
import { AssignmentRepository } from "../Api/assignmentRepository";

export class ViewCourse extends React.Component{

    username;

    constructor(props){
        super(props);
        this.username = localStorage['username'];

        this.state = {
            assignments: [],
            courseDetails: [],
            sortDirection : 'asc',
            userID: 1,
            classID: 1,
        };

        this.courseRepo = new ClassesRepository();
        //this.assignmentRepo = new AssignmentRepository();
        this.formatDate = this.formatDate.bind(this);
        this.formatSemester = this.formatSemester.bind(this);

    }//end state


    componentDidMount(){

        this.courseRepo.getCourses(this.state.userID)
            .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courseDetails:[...this.state.courseDetails, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd)]});
            });
            console.log(this.state);

        })
        .catch(res => console.log(res));


{/*        this.assignmentRepo.getAssignmentsClass(this.state.userID, this.state.classID)
            .then(res => {
                console.log(res)
                res.data.forEach(ele => {
                    this.setState({assignments:[...this.state.assignments, new Assignment(ele.assignmentID, ele.classID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                });
                console.log(this.state);
            })
        .catch(res => console.log(res)); */}
    }

    sortBy(field) {
        if (this.state.sortDirection === 'asc') {
            this.setState({sortDirection: 'desc'})
            this.setState({assignments: _.orderBy(this.state.assignments, field, this.state.sortDirection)
            });
        }
        if (this.state.sortDirection === 'desc') {
            this.setState({sortDirection: 'asc'})
            this.setState({assignments: _.orderBy(this.state.assignments, field, this.state.sortDirection)
            });
        }
    }

    formatDate(myDate){
        var date = String(myDate);
        if(date === 'null'){
            return '-';
        }

        var properDate =  date.substring(5,7) + "-" + date.substring(8,10) + "-" + date.substring(0,4); 
        return properDate;
    }

    formatSemester(semester, year){
        if(semester === 1){
            return 'Fall ' + String(year);
        }

        if(semester === 2){
            return 'Spring ' + String(year);
        }

    }

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">View Course</span>
            </nav>
            <div className ="p-2 text-right" role="group" >
                <button type="p-3 button rounded" class="btn btn-primary" onClick={() => this.props.history.push("/courses")} >Return</button>
            </div>
            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark font-weight-bold">Course Information</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course name</th>
                            <th scope="col">Days</th>
                            <th scope="col">Professor</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Semester Offered</th>
                            <th scope="col">Description</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.courseDetails.map((x) =>
                            <tr key = {x.classID}>
                                <td>{x.classID}</td>
                                <td> Name(x.name)</td>
                                <td>{x.classDaysID}</td>
                                <td>Proffesor(x.?)</td>
                                <td>{x.classTimeStart}</td>
                                <td>{x.classTimeEnd}</td>
                                <td>{this.formatSemester(x.seasonOffered, x.yearOffered)}</td>
                                <td>{x.description}</td>
                                <button type="button" className="btn btn-primary btn-sm rounded">Remove Course</button>
                            </tr>)}
                        </tbody> 
                    <tbody>
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>MWF</td>
                            <td>James Burns</td>
                            <td>10:00 AM</td>
                            <td>10:50 AM</td>
                            <td>January 2021</td>
                            <td>Explore the mystery of code in a creative way.</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">Remove Course</button>
                        </tr>
                    </tbody>
                </table>
                <p>Note: List current assigments for current course</p>
            </div>
            </div>
            </div>
          </>
        )
      }

}//end ViewCourse
