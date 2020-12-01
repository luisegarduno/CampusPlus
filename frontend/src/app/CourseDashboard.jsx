import React from "react";
import { Header } from './Header';
import { Course } from '../models/Class';
import { ClassesRepository} from '../Api/classesRepository';

export class CourseDashboard extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            courses: [],
            userID: 1,
        };
        
        this.classesRepo = new ClassesRepository();

    }//end state


    componentDidMount(){
        this.classesRepo.getCourses(this.state.userID)
        .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courses:[...this.state.courses, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd)]});
                
          });
     
        console.log(this.state);
            })
            .catch(res => console.log(res));
    }

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Courses</span>
            </nav>
            
            <div className="container-fluid container-lg" id="content">
                <div className = "text-center mx-auto">
                    <div className="p-3 container">
                        <h2 className = " p-3 text-center text-dark">My Current Courses</h2>
                        <table className="table table-striped table-bordered">
                            <thead className = "thead-dark">
                                <tr>
                                    <th scope="col">Course ID</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Days</th>
                                    <th scope="col">Professor</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                    {/* <th scope="col">Professor</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Edit</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.courses.map((x) =>
                                    <tr key = {x.classID}>
                                        <td>{x.classDaysID}</td>
                                        <td>{x.description}</td>
                                        <td>{x.yearOffered}</td>
                                        <td>{x.seasonOffered}</td>
                                        <td>{x.classTimeStart}</td>
                                        <td>{x.classTimeEnd}</td>
                                    </tr>)}
                                <tr>
                                    {/* <td>ASIM 1310</td>
                                    <td>Creative Coding 1</td>
                                    <td>MWF</td>
                                    <td>James Burns</td>
                                    <td>10:00 AM</td>
                                    <td>10:50 AM</td>
                                    <td>January 2021</td>
                                    <td>Explore the mystery of code in a creative way.</td> */}
                                    <button type="button" className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/viewCourses")}>View Course</button>
                                </tr>
                                <tr>
                                    {/* <td>ASPT 1300</td>
                                    <td>Introduction to Painting</td>
                                    <td>TuTh</td>
                                    <td>Nyugen Smith</td>
                                    <td>12:30 PM</td>
                                    <td>3:20 PM</td>
                                    <td>Spring 2021</td>
                                    <td>Learn how to use a paintbrush like a pro</td> */}
                                    <button type="button" className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/viewCourses")}>View Course</button>
                                </tr>
                            </tbody>
                        </table>
                        <div className ="p-3 btn-group" role="group" >
                            <button type="button rounded" class="btn btn-primary" onClick={() => this.props.history.push("/courseOptions")}>Search Available Courses</button>
                            <button type="button rounded" class="btn btn-primary" onClick={() => this.props.history.push("/completedCourses")}>Archived Courses</button>
                        </div>
                    </div>
                </div>
            </div>
          </>
        )
      }

}//end CourseDashboard
