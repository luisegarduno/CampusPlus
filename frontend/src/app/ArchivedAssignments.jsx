import React from 'react'
import _ from 'lodash';
import { Header } from './Header';
import { AssignmentRepository } from '../Api/assignmentRepository';
import { Assignment } from '../models/Assignment';

export class ArchivedAssignments extends React.Component {

    
    constructor(props){
        super(props);
        this.username = localStorage['username'];
        this.userID = localStorage['userID'];

        this.state = {
            archieve: [],
            sortDirection: 'asc',
            username: this.username,
            userID: this.userID,
        };

        this.assignmentRepo = new AssignmentRepository();
        this.formatDate = this.formatDate.bind(this);
    }



    componentDidMount(){
        this.assignmentRepo.getAssignments(this.state.userID)
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                if(ele.completionStatus === 1){
                    this.setState({archieve:[...this.state.archieve, new Assignment(ele.assignmentID, ele.courseID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                }
            });
            console.log(this.state);

        })

        .catch(res => console.log(res));
    }

        sortBy(field) {
        if (this.state.sortDirection === 'asc') {
            this.setState({sortDirection: 'desc'})
            this.setState({archieve: _.orderBy(this.state.archieve, field, this.state.sortDirection)
            });
        }
        if (this.state.sortDirection === 'desc') {
            this.setState({sortDirection: 'asc'})
            this.setState({archieve: _.orderBy(this.state.archieve, field, this.state.sortDirection)
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

    storeID(id){
        this.props.history.push({
            pathname: `/assignment/${id}`,
            state: {assignmentID: id}
        });
        

    }

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Archived Assignments</span>
            </nav>
            <div className="p-5 container-fluid container-md">
                    <h2 className = "p-3 text-center text-dark font-weight-bold">Completed Assignments</h2>
                    <div id="content">

                    <div className = "p-2 text-center mx-auto assignmentsTable w-auto table-responsive-md tableSort">
                    <table className="table table-striped table-responsive-md">
                        <thead className="thead-dark">
                            <tr>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'name')}>Assignment</button></th>
                            <th><button className="btn btn-primary btn-rounded" aria-pressed="true" onClick={this.sortBy.bind(this, 'courseID')}>Course</button></th>
                            <th><button className="btn btn-primary btn-rounded" aria-pressed="true" onClick={this.sortBy.bind(this, 'assignmentType')}>Assignment Type</button></th>
                            <th><button className="btn btn-primary btn-rounded" aria-pressed="true" onClick={this.sortBy.bind(this, 'dueDate')}>Due Date</button></th>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'description')}>Description</button></th>
                            <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            { this.state.archieve.map((x) =>
                                <tr key = {x.assignmentID}>
                                    <td>{x.name}</td>
                                    <td>{x.courseID}</td>
                                    <td>{x.assignmentType}</td>
                                    <td>{this.formatDate(x.dueDate)}</td>
                                    <td>{x.description}</td>
                                    <td><button type="button" className="btn-floating yellow darken-1 rounded" onClick={() => this.storeID(x.assignmentID)}><i className="fas fa-pencil-alt"></i></button></td>

                                </tr>)}
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
          </>
        )
      }
}//end ArchivedAssignments
