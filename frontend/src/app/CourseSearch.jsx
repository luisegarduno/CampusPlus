import React from "react";
export class CourseSearch extends React.Component{

    render() {
        return(<>
            <div className ="header">
                <h1 className = "text-left bg-dark text-white">CampusPlus
                    <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
                </h1>
         </div>
            <div className = "p-3 container-sm text-center w-50">
                <div className ="header"> 
                </div>
                <form>
                    <h2 className = "text-left">Search Courses</h2>
                    <div>
                    <select className="p-2 custom-select mb-3">
                        <option selected>Search By Semester (required)</option>
                            <option value="fall2020">Fall 2020</option>
                            <option value="jan2021">January 2021</option>
                            <option value="spring2021">Spring 2021</option>
                            <option value="may2021">May2021</option>
                    </select>

                    <select className="p-2 custom-select mb-3">
                        <option selected>Search By Course ID (optional)</option>
                            <option value="ASIM 1310">ASIM 1310</option>
                            <option value="ASIM 3305">ASIM 3305</option>
                            <option value="ASPT 1300">ASPT 1300</option>
                            <option value="CS 5324">CS 5324</option>
                    </select>
                    
                    <select className="p-2 custom-select mb-3">
                        <option selected>Search By Course Name (optional)</option>
                            <option value="ASIM 1310">Creative Coding 1</option>
                            <option value="ASIM 3305">Design For Professionals</option>
                            <option value="ASPT 1300">Painting Is Fun</option>
                            <option value="CS 5324">Some Kind of Coding</option>
                    </select>

                    <select className="p-2 custom-select mb-3">
                        <option selected>Search By Class Time (optional)</option>
                            <option value="8am">8:00 AM</option>
                            <option value="9am">9:00 AM</option>
                            <option value="11am">11:00 AM</option>
                            <option value="330pm">3:30 PM</option>
                    </select>
                    
                    <select className="p-2 custom-select mb-3">
                        <option selected>Search By Professor (optional)</option>
                            <option value="fontenot">Mark Fontenot</option>
                            <option value="jimmydean">Jimmy Dean</option>
                            <option value="captainMorgan">Captain Morgan</option>
                            <option value="tonyStark">Tony Stark</option>
                    </select>

                    </div>
                    <button className="btn btn-primary rounded">Search</button>
                </form>
            </div>
          </>
        )
      }

}//end CourseSearch