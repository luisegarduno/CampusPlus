import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
//import { ProductRepository } from '../Api/productRepository';

export class AssignmentDashboard extends React.Component {
    //api = new ProductRepository();
    
    state = {

    }//end state

    render() {
        return(<>
            <div className ="header">
                <h1 className = "text-left bg-dark text-white">CampusPlus
                    <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
                </h1>
            </div>
                <div className="p-5 container">
                    <h2 className = " p-2 text-center bg-dark text-white">Assignments</h2>
                <div id="content">
            <div className = "p-2 text-center mx-auto">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Assignment</th>
                            <th scope="col">Course</th>
                            <th scope="col">Assignment Type</th>
                            <th scope="col">Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Research Paper</td>
                            <td>History</td>
                            <td>Paper</td>
                            <td>12/04/2020</td>
                            <button type="button" className="btn btn-primary rounded">Edit</button>
                        </tr>
                        <tr>
                            <td>Math Quiz</td>
                            <td>Linear Algebra</td>
                            <td>Quiz</td>
                            <td>11/20/2020</td>
                            <button type="button" className="btn btn-primary rounded">Edit</button>
                        </tr>
                        <tr>
                            <td>Painting Due</td>
                            <td>Intro To Painting</td>
                            <td>Canvas Due</td>
                            <td>11/25/20</td>
                            <button type="button" className="btn btn-primary rounded">Edit</button>
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