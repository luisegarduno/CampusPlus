import React from "react";
import _ from 'lodash';
import { Header } from './Header';
import { Course } from '../models/Course';
import { ClassesRepository } from "../Api/classesRepository";
import { AssignmentRepository } from "../Api/assignmentRepository";

export class ViewCourse extends React.Component{


    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.userID = localStorage['userID'];

        this.state = {
            assignments: [],
            courseDetails: [],
            sortDirection : 'asc',
            userID: this.userID,
            username: this.username,
            classID: 1,
            classes: [],
            descriptions: [],
            backup: [],
        };

        this.courseRepo = new ClassesRepository();
        this.assignmentRepo = new AssignmentRepository();
        this.formatDate = this.formatDate.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.formatSemester = this.formatSemester.bind(this);

    }//end state


    componentDidMount(){

        this.courseRepo.getCourses(this.state.userID)
            .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courseDetails:[...this.state.courseDetails, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd, ele.teacherName, ele.reviews)]});
            });
            console.log(this.state);

        })
        .catch(res => console.log(res));

        this.assignmentRepo.getAssignmentsClass(this.state.userID, this.state.classID).then(x => this.setState({classes : x.data}));
        this.assignmentRepo.getAssignmentsClass(this.state.userID, this.state.classID).then(y => this.setState({description : y.data}));
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

    formatTime(myTime){
        var timeValue;
        var time = String(myTime);
        time = time.split(':');

        var hours = Number(time[0]);
        var minutes = Number(time[1]);

        if (hours > 0 && hours <= 12) timeValue= "" + hours;
        else if (hours > 12) timeValue= "" + (hours - 12);
        else if (hours === 0) timeValue= "12";

        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
        timeValue += (hours >= 12) ? " P.M." : " A.M.";

        return timeValue;
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
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.courseDetails.map((x) =>
                            <tr key = {x.classID}>
                                <td>{x.classID}</td>
                                <td>{x.description}</td>
                                <td>{x.classDaysID}</td>
                                <td> {x.teacherName} </td>
                                <td>{this.formatTime(x.classTimeStart)}</td>
                                <td>{this.formatTime(x.classTimeEnd)}</td>
                                <td>{this.formatSemester(x.seasonOffered, x.yearOffered)}</td>
                                <td>{this.reviews}</td>
                                <td><button type="button" className="btn-floating btn-danger darken-1 rounded"><i className="fas fa-trash-alt"></i></button></td>
                            </tr>)}
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
