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
                    <div className="p-3 container justify-content-center">
                        <h2 className = " p-3 text-center text-dark font-weight-bold ">My Current Courses</h2>
                        <table className="table table-striped table-bordered w-auto table-responsive-md">
                            <thead className = "thead-dark">
                                <tr>
                                    <th scope="col">Course ID</th>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Professor</th>
                                    <th scope="col">Start Time</th>
                                    <th scope="col">End Time</th>
                                    <th scope="col">Edit</th>
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
                                        <button type="button" className="btn btn-primary btn-sm rounded" onClick={() => this.props.history.push("/viewCourses")}>View Course</button>
                                    </tr>)}
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
