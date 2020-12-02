import React from "react";
import { Header } from './Header';

export class ViewCourse extends React.Component{

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">View Course</span>
            </nav>
            <div className ="p-2 text-right" role="group" >
                <button type="p-3 button rounded" class="btn btn-primary" onClick={() => this.props.history.push("/courses")} >Return</button>
            </div>
            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark font-weight-bold">Course Information</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course name</th>
                            <th scope="col">Days</th>
                            <th scope="col">Professor</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th scope="col">Semester Offered</th>
                            <th scope="col">Description</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>MWF</td>
                            <td>James Burns</td>
                            <td>10:00 AM</td>
                            <td>10:50 AM</td>
                            <td>January 2021</td>
                            <td>Explore the mystery of code in a creative way.</td>
                            <button type="button" className="btn btn-primary btn-sm rounded">Remove Course</button>
                        </tr>
                    </tbody>
                </table>
                <p>Note: List current assigments for current course</p>
            </div>
            </div>
            </div>
          </>
        )
      }

}//end ViewCourse
