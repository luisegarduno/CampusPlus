import React from "react";
import _ from 'lodash';
import { Header } from './Header';
import { Course } from '../models/Course';
import { ClassesRepository } from '../Api/classesRepository';

export class CourseDashboard extends React.Component{
    
    constructor(props){
        super(props);

        this.username = localStorage['username'];
        this.userID = localStorage['userID'];
        
        this.state = {
            courses: [],
            sortDirection: 'asc',
            userID: this.userID,
        };
        
        this.coursesRepo = new ClassesRepository();
        this.formatDate = this.formatDate.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.formatSemester = this.formatSemester.bind(this);

    }//end state

    componentDidMount(){
        this.coursesRepo.getStudentSchedule(this.state.userID)
        .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courses:[...this.state.courses, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd)]});
            });
            console.log(this.state);

        })

        .catch(res => console.log(res));
    }

    sortBy(field) {
        if (this.state.sortDirection === 'asc') {
            this.setState({sortDirection: 'desc'})
            this.setState({courses: _.orderBy(this.state.courses, field, this.state.sortDirection)
            });
        }
        if (this.state.sortDirection === 'desc') {
            this.setState({sortDirection: 'asc'})
            this.setState({courses: _.orderBy(this.state.courses, field, this.state.sortDirection)
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

    formatSemester(semester, year){
        if(semester === 1){
            return 'Fall ' + String(year);
        }

        if(semester === 2){
            return 'Spring ' + String(year);
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

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Courses</span>
            </nav>
            
            <div className="p-5 container-fluid container-md">
                    <div className="p-5 container-fluid container-md">
                        <h2 className = "p-3 text-center text-dark font-weight-bold">My Current Courses</h2>
                        <div id="content">
                            <div className = "p-2 text-center mx-auto assignmentsTable w-auto table-responsive-md tableSort">
                                <table className="table table-striped table-bordered table-responsive-md">
                                    <thead className = "thead-dark">
                                        <tr>
                                            <th scope="col">Course ID</th>
                                            <th scope="col">Course Name</th>
                                            <th scope="col">Term Offered</th>
                                            <th scope="col">Start Time</th>
                                            <th scope="col">End Time</th>
                                            <th scope="col">Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { this.state.courses.map((x) =>
                                            <tr key = {x.classID}>
                                                <td>{x.classDaysID}</td>
                                                <td>{x.description}</td>
                                                <td>{this.formatSemester(x.seasonOffered, x.yearOffered)}</td>
                                                <td>{this.formatTime(x.classTimeStart)}</td>
                                                <td>{this.formatTime(x.classTimeEnd)}</td>
                                                <button type="button" className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/viewCourses")}>View Course</button>
                                            </tr>)}
                                        </tbody>
                                    </table>
                                <div className ="p-3 btn-group" role="group" >
                                    <button type="button rounded" className="btn btn-primary" onClick={() => this.props.history.push("/courseOptions")}>Search Available Courses</button>
                                    <button type="button rounded" className="btn btn-primary" onClick={() => this.props.history.push("/completedCourses")}>Archived Courses</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>
          </>
        )
      }

}//end CourseDashboard
