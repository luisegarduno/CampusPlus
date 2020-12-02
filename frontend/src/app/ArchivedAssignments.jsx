import React from 'react'
import { Header } from './Header';
import { ProductRepository } from '../Api/productRepository';
import {Assignment } from '../models/Assignment';

export class ArchivedAssignments extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            archieve: [],
            userID: 1,
        };

        this.productRepo = new ProductRepository();
    }

    componentDidMount(){
        this.productRepo.getAssignments(this.state.userID)
        .then(res => {
            console.log(res)
            res.data.forEach(ele => {
                if(ele.completionStatus === 1){
                this.setState({archieve:[...this.state.archieve, new Assignment(ele.assignmentID, ele.classID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                
             } });
     
        console.log(this.state);
            })
            .catch(res => console.log(res));
    }

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Archived Assignments</span>
            </nav>
            <div className="p-3 container-fluid container-md">
            <form className="mb-1 w-75 mx-auto">
                <h2 className = "p-3 text-center text-dark font-weight-bold">Completed Assignments</h2>
            <div id="content">
            <div className = "text-center mx-auto w-auto table-responsive-md">
                <table className="table table-striped">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Assignment</th>
                            <th scope="col">Course</th>
                            <th scope="col">Assignment Type</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">View Assignment</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.archieve.map((x) => <tr key = {x.assignmentID}> <td>{x.name}</td> <td>{x.classID}</td> <td>{x.assignmentType}</td> <td>{x.dueDate}</td><td>{x.description}</td> 
                    <button type="button" className="btn btn-primary btn-sm rounded">View</button>
                    </tr>)}
                    </tbody> 
                </table>
            </div>
            </div>
            </form>
            </div>
          </>
        )
      }
}//end ArchivedAssignments
