import React from "react";
export class CourseDashboard extends React.Component{

    render() {
        return(<>
            <div className ="header">
                <h1 className = "text-left bg-dark text-white">CampusPlus
                    <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
                </h1>
            </div>
            <div id="content">
            <div className = "text-center mx-auto">
                <div className ="p-3 btn-group" role="group" >
                    <button type="button" class="btn btn-primary" onClick={() => this.props.history.push("/courseOptions")}>Search Courses</button>
                    <button type="button" class="btn btn-primary">Add A Course?</button>
                    <button type="button" class="btn btn-primary">Archived Courses?</button>
                </div>
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark">My Current Courses</h2>
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
                            <button type="button" className="btn btn-primary rounded">Remove</button>
                        </tr>
                        <tr>
                            <td>ASPT 1300</td>
                            <td>Introduction to Painting</td>
                            <td>TuTh</td>
                            <td>Nyugen Smith</td>
                            <td>12:30 PM</td>
                            <td>3:20 PM</td>
                            <td>Spring 2021</td>
                            <td>Learn how to use a paintbrush like a pro</td>
                            <button type="button" className="btn btn-primary rounded">Remove</button>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            </div>
          </>
        )
      }

}//end CourseDashboard
