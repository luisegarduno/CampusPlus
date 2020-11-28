import React from "react";
import { Header } from './Header';

export class ArchivedCourses extends React.Component{

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Archived Courses</span>
            </nav>
            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark">Completed Courses</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Semester Offered</th>
                            <th scope="col">View Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>January 2021</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View Course</button>
                        </tr>
                        <tr>
                            <td>ASPT 1300</td>
                            <td>Introduction to Painting</td>
                            <td>Spring 2021</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">View Course</button>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
          </>
        )
      }

}//end ArchivedCourses
