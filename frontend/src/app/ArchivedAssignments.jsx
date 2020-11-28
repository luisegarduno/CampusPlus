import React from 'react'
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { Header } from './Header';
import { Redirect } from 'react-router-dom'

export class ArchivedAssignments extends React.Component {
    
    state = {}

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Archived Assignments</span>
            </nav>

                <div className="p-5 container-fluid container-md">
                    <h2 className = " p-3 text-center text-dark">Completed Assignments</h2>
                <div id="content">
            <div className = "text-center mx-auto">
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
                        <tr>
                            <td>Research Paper</td>
                            <td>History</td>
                            <td>Paper</td>
                            <td>12/04/2020</td>
                            <td>Write about Christopher Columbus</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View</button>
                        </tr>
                        <tr>
                            <td>Math Quiz</td>
                            <td>Linear Algebra</td>
                            <td>Quiz</td>
                            <td>11/20/2020</td>
                            <td>What are matrices and how do you use them</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View</button>
                        </tr>
                        <tr>
                            <td>Painting Due</td>
                            <td>Intro To Painting</td>
                            <td>Canvas Due</td>
                            <td>11/25/20</td>
                            <td>I am a master of the brushes</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View</button>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
          </>
        )
      }
}//end ArchivedAssignments
