import React from "react";
import _ from 'lodash';
import { Header } from './Header';
import { Course } from '../models/Course';
import { ClassesRepository } from '../Api/classesRepository';

export class ArchivedCourses extends React.Component{

        constructor(props){
        super(props);
        this.state = {
            courses: [],
            sortDirection: 'asc',
            userID: 1,
        };
        
        this.coursesRepo = new ClassesRepository();
        this.formatDate = this.formatDate.bind(this);
        this.formatSemester = this.formatSemester.bind(this);

    }//end state

    componentDidMount(){
        this.coursesRepo.getStudentSchedule(this.state.userID)
        .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courses:[...this.state.courses, new Course(ele.courseID, ele.courseDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.courseTimeStart, ele.courseTimeEnd)]});
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
                <span className="mb-0 h5 text-primary">Archived Courses</span>
            </nav>
            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark font-weight-bold">Completed Courses</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Semester Offered</th>
                            <th scope="col">View Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>January 2021</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View Course</button>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary rounded" onClick={() => this.props.history.push("/courses")}>Return</button>
            </div>
            </div>
            </div>
          </>
        )
      }

}//end ArchivedCourses