import React from "react";
import _ from 'lodash';
import { Course } from '../models/Course';
import { ClassesRepository} from '../Api/classesRepository';

export class CourseList extends React.Component{

    username;

    constructor(props){
        super(props);
        this.username = localStorage['username'];

        this.state = {
            classes: [],
            sortDirection: 'asc',
            userID: 1,
        };

        this.classRepo = new ClassesRepository();
        this.formatDate = this.formatDate.bind(this);

    }//end state


    componentDidMount(){
        //need to return full list of classes, userID not needed
        this.classRepo.getCourses(this.state.userID)
        .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({classes:[...this.state.classes, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd)]});
            });
     
            console.log(this.state);
        })
        
        .catch(res => console.log(res));
    }

    sortBy(field) {
        if (this.state.sortDirection === 'asc') {
            this.setState({sortDirection: 'desc'})
            this.setState({classes: _.orderBy(this.state.classes, field, this.state.sortDirection)
            });
        }
        if (this.state.sortDirection === 'desc') {
            this.setState({sortDirection: 'asc'})
            this.setState({classes: _.orderBy(this.state.classes, field, this.state.sortDirection)
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


    render() {
        return(<>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="mb-0 h3 text-white font-weight-bold">Campus</span>
                <span className="mb-0 h3 text-primary font-weight-bold">Plus</span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ">
                        <li className="nav-item text-white">
                            <a className="nav-link active text-white" href="/guest">Home</a>
                        </li>
                    </ul>
                </div>
                <a href="/welcomepages" className="btn btn-primary btn-sm rounded" role="button" aria-pressed="true">LOG OUT</a>
            </nav>
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary font-weight-bold">Courses Offered</span>
            </nav>

            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark">Courses Offered</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Days</th>
                            <th scope="col">Professor</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.classes.map((x) =>
                        <tr key = {x.classID}>
                            <td>{x.classDaysID}</td>
                            <td>{x.description}</td>
                            <td>{x.yearOffered}</td>
                            <td>{x.seasonOffered}</td>
                            <td>{x.classTimeStart}</td>
                            <td>{x.classTimeEnd}</td>
                        </tr>
                    )}
                    {/*
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>MWF</td>
                            <td>James Burns</td>
                            <td>10:00 AM</td>
                            <td>10:50 AM</td>
                        </tr>
                    */}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
          </>
        )
      }
}//end CourseList
