import React from 'react'
import { Link } from 'react-router-dom';
//import { NavBar } from '../HomePage';
//import { ProductRepository } from '../Api/productRepository';

export class AssignmentDashboard extends React.Component {
    //api = new ProductRepository();
    
    state = {

    }//end state

    render() {
        return(<>

            <div className="p-5 container">
            <div id="content">
            <div className = "p-2 card text-center mx-auto">
            <h5 className="card-title">Assignments</h5>
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

            <button type="button" className="btn btn-primary rounded">Add Assignment</button>
            </div>
            </div>
            </div>
          </>
        )
      }


}//end AssignmentDashboard