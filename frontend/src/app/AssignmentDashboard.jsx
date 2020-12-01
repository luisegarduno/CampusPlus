import React from 'react'
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { ProductRepository } from '../Api/productRepository';
import { Header } from './Header';
import { Assignment } from '../models/Assignment';
import _ from 'lodash';


export class AssignmentDashboard extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            assignments: [],
            sortDirection : 'asc',
            userID: 1,
        };

        this.productRepo = new ProductRepository();
        this.formatDate = this.formatDate.bind(this);

    }//end state


    componentDidMount(){
        this.productRepo.getAssignments(this.state.userID)
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

    formatDate(date){
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
                    <h2 className = " p-3 text-center text-dark">Current Assignments</h2>
                <div id="content">

                <div className = "p-2 text-center mx-auto assignmentsTable tableSort">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        
                            <th><button type="button" id="Assign" onClick={this.sortBy.bind(this, 'name')}>Assignment</button></th>
                            <th><button type="button" id="Assign" onClick={this.sortBy.bind(this, 'classID')}>Course</button></th>
                            <th><button type="button" id="Assign" onClick={this.sortBy.bind(this, 'assignmentType')}>Assignment Type</button></th>
                            <th><button type="button" id="Assign" onClick={this.sortBy.bind(this, 'dueDate')}>Due Date</button></th>
                            <th><button type="button" id="Assign" onClick={this.sortBy.bind(this, 'description')}>Description</button></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.assignments.map((x) => <tr key = {x.assignmentID}> <td>{x.name}</td> <td>{x.classID}</td> <td>{x.assignmentType}</td> <td>{x.dueDate}</td><td>{x.description}</td> </tr>)}
                        <tr>
                            <button type="button" className="btn btn-primary rounded float-right">Edit</button>
                        </tr>
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
