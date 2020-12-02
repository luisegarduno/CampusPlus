import React from 'react'
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { AssignmentRepository } from '../Api/assignmentRepository';
import { Header } from './Header';
import { Assignment } from '../models/Assignment';
import _ from 'lodash';


export class AssignmentDashboard extends React.Component {

    username;

    constructor(props){
        super(props);
        this.username = localStorage['username'];

        this.state = {
            assignments: [],
            sortDirection : 'asc',
            userID: 1,
        };

        this.assignmentRepo = new AssignmentRepository();
        this.formatDate = this.formatDate.bind(this);

    }//end state


    componentDidMount(){
        this.assignmentRepo.getAssignments(this.state.userID)
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                this.setState({assignments:[...this.state.assignments, new Assignment(ele.assignmentID, ele.classID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                
          });
     
        console.log(this.state);
            })
            .catch(res => console.log(res));
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
    

    render() {
        return(<>
                <Header />
                <nav className="navbar bg-white">
                    <span className="mb-0 h5 text-primary">Assignments</span>
                </nav>
                <div className="p-5 container-fluid container-md">
                    <h2 className="p-3 text-center text-dark font-weight-bold">Current Assignments</h2>
                <div id="content">

                <div className = "p-2 text-center mx-auto assignmentsTable w-auto table-responsive-md tableSort">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        
                            <th>Assignment</th>
                            <th><button className="btn btn-primary btn-rounded active" aria-pressed="true" onClick={this.sortBy.bind(this, 'classID')}>Course</button></th>
                            <th><button className="btn btn-primary btn-rounded active" aria-pressed="true" onClick={this.sortBy.bind(this, 'assignmentType')}>Assignment Type</button></th>
                            <th><button className="btn btn-primary btn-rounded active" aria-pressed="true" onClick={this.sortBy.bind(this, 'dueDate')}>Due Date</button></th>
                            <th>Description</th>
                            <th>Edit</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.assignments.map((x) =>
                            <tr key = {x.assignmentID}>
                                <td>{x.name}</td>
                                <td>{x.classID}</td>
                                <td>{x.assignmentType}</td>
                                <td>{this.formatDate(x.dueDate)}</td>
                                <td>{x.description}</td>
                                <td><button type="button" className="btn-floating yellow darken-1 rounded"><i className="far fa-edit"></i></button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button className="btn btn-primary rounded" onClick={() => this.props.history.push("/assignmentchanges")}>Add Assignment</button>
            </div>
            </div>
            </div>
            
          </>
        )
      }
}//end AssignmentDashboard
