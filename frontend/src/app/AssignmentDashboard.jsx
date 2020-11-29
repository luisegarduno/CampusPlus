import React from 'react'
//import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { ProductRepository } from '../Api/productRepository';
import { Header } from './Header';
import _ from 'lodash';


export class AssignmentDashboard extends React.Component {
    username;
    productRepository = new ProductRepository();

    constructor(props){
        super(props);
        this.username = localStorage['username']

        this.state = {
            assignments: [],
            sortDirection : 'asc',
            //userID: 1,

        };
        this.formatDate = this.formatDate.bind(this);
        
    };//end state

    componentDidMount(){
        this.productRepository.getAssignments().then(x => this.setState({assignments : x.data}))
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
                        {this.state.assignments.map(assign => (
                            <tr key={assign.id}>
                                <td id="assign">{assign.assignmentID}</td>
                                <td id="assign">{assign.classID}</td>
                                <td id="assign">{assign.assignmentType}</td>
                                <td id="assign">{this.formatDate(assign.dueDate)}</td>
                                <td id="assign">{assign.description}</td>
                            </tr>
                        ))}
                        
                            {/*<button type="button" className="btn btn-primary rounded">Edit</button> */}
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
