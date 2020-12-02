import React from "react";
//import {Course} from '../models/Class';
//import {ProductRepository} from '../Api/productRepository';

export class CourseList extends React.Component{

    /*
    constructor(props){
        super(props);
            this.state = {

       courses: [],
       userID: 1,
            };
    this.productRepo = new ProductRepository();

    }//end state

    componentDidMount(){
        //need to return full list of courses, userID not needed
        this.productRepo.getCourses(this.state.userID)
        .then(res => {
            console.log(res)
            res.forEach(ele => {
                this.setState({courses:[...this.state.courses, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd)]});
                
          });
     
        console.log(this.state);
            })
            .catch(res => console.log(res));
    }
    */

    render() {
        return(<>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="mb-0 h3 text-white font-weight-bold">Campus</span>
                <span className="mb-0 h3 text-primary font-weight-bold">Plus</span>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ">
                        <li className="nav-item text-white">
                            <a className="nav-link active text-white" href="/guestpages">Home</a>
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
                    { /*this.state.courses.map((x) => <tr key = {x.classID}> <td>{x.classDaysID}</td> <td>{x.description}</td> <td>{x.yearOffered}</td> <td>{x.seasonOffered}</td><td>{x.classTimeStart}</td> <td>{x.classTimeEnd}</td> </tr>)*/}
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>MWF</td>
                            <td>James Burns</td>
                            <td>10:00 AM</td>
                            <td>10:50 AM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
          </>
        )
      }
}//end CourseList
