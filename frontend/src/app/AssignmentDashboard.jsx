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
        this.userID = localStorage['userID'];

        this.state = {
            assignments: [],
            sortDirection : 'asc',
            userID: '',
        };

        this.assignmentRepo = new AssignmentRepository();
        this.formatDate = this.formatDate.bind(this);
        this.displayAssignments();

    }//end state

    async getAss(){
        //window.location.reload(false);
        return await this.assignmentRepo.getAssignments(this.userID)
       
    }


    displayAssignments(){
       
        console.log("loaded");
        this.getAss()
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                if(ele.completionStatus === 0){
                this.setState({assignments:[...this.state.assignments, new Assignment(ele.assignmentID, ele.classID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                
          }
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
                    <span className="mb-0 h5 text-primary">Assignments</span>
                </nav>
                <div className="p-5 container-fluid container-md">
                    <h2 className="p-3 text-center text-dark font-weight-bold">Current Assignments</h2>
                <div id="content">

                <div className = "p-2 text-center mx-auto assignmentsTable w-auto table-responsive-md tableSort">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'name')}>Assignment</button></th>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'classID')}>Course</button></th>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'assignmentType')}>Assignment Type</button></th>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'dueDate')}>Due Date</button></th>
                            <th><button className="btn btn-primary btn-rounded" type="button" id="Assign" onClick={this.sortBy.bind(this, 'description')}>Description</button></th>
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
                            <td><button type="button" className="btn-floating yellow darken-1 rounded" onClick={() => this.storeID(x.assignmentID)}><i className="fas fa-pencil-alt"></i></button></td>
                            </tr>)}

                        <tr>
                           {/* <button type="button" className="btn btn-primary rounded float-right">Edit</button> */}
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary rounded" onClick={() => this.props.history.push("/add")}>Add Assignment</button>
             
            </div>
            </div>
            </div>
            
          </>
        )
      }
}//end AssignmentDashboard
