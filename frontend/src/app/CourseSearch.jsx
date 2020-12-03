import React from "react";
import { Header } from './Header';
import { ClassesRepository } from '../Api/classesRepository';
import { Course } from '../models/Course.js'

export class CourseSearch extends React.Component{

    constructor(props){
        super(props);
        this.userID = localStorage['userID'];

        this.state = {
            classes: [],
            semester: -1,
            courseID: -1,
            courseName: "None",
            classTime: '',
            professor: "None"

        };

        this.classRepo = new ClassesRepository();
    }

    async search() {
        console.log(this.classRepo.getCourseList());

        this.classRepo.getCourseList()
        .then(res => {
            console.log(res);
            res.forEach(ele => {
                console.log(this.state.courseName);
                // var val = parseInt(this.state.semester);
                if (
                   /*   ((ele.seasonOffered === val) || (val === -1)) && 
                    ((ele.classID === parseInt(this.state.courseID)) || (parseInt(this.state.courseID) === 0)) && */
                    ((ele.description === this.state.courseName) || (this.state.courseName === "None"))
                   //((ele.teacherName === this.state.professor) || (this.state.professor === "None"))
                ) 
                {
                    this.setState({classes:[...this.state.classes, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd, ele.teacherName)]}); 
                }
            });
            this.showResults();
        })
        .catch(res => console.log(res));
    }

    async showResults() {
        console.log(this.state.classes);
        this.props.history.push({
            pathname: "/course_search_results",
            state: {classes: this.state.classes}
        })
    }

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary ">Course Search</span>
            </nav>
            <div className = "p-3 container-sm container-fluid text-center">
                <div className ="header"> 
                </div>
                <form>
                    <h2 className = "text-left font-weight-bold">Search Courses</h2>
                    <div>
                    {/*<select className="p-2 custom-select mb-3" onChange={e => this.setState({semester: e.target.value})}>
                        <option value="-1"selected>Search By Semester (required)</option>
                            <option value="1">Fall 2020</option>
                            <option value="2">January 2021</option>
                            <option value="3">Spring 2021</option>
                            <option value="4">May2021</option>
                    </select>

                    <select className="p-2 custom-select mb-3" onChange={e => this.setState({courseID: e.target.value})}>
                        <option value="-1" defaultValue>Search By Course ID (required)</option>
                            <option value="1">ASIM 1310</option>
                            <option value="ASIM 3305">ASIM 3305</option>
                            <option value="ASPT 1300">ASPT 1300</option>
                            <option value="CS 5324">CS 5324</option>
                    </select> */}
                    
                    <select className="p-2 custom-select mb-3" onChange={e => this.setState({courseName: e.target.value})}>
                        <option value="None" defaultValue>Search By Course Name (required)</option>
                            <option value="Programming Languages">Programming Languages</option>
                            <option value="Calculus 2 ">Calculus 2</option>
                            <option value="GUI">GUI</option>
                            <option value="Swimming">Swimming</option>
                            <option value="Bowling">Bowling</option>
                            <option value="Databases ">Databases</option>
                            <option value="Linear Algebra">Linear Algebra</option>
                            <option value="Philosophy ">Philosophy</option>
                            <option value="DISC">DISC</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="The business of business">The Business of Business</option>
                            <option value="Information Security">Information Security</option>
                    </select>

                    {/*<select className="p-2 custom-select mb-3" onChange={e => this.setState({classTime: e.target.value})}>
                        <option selected>Search By Class Time (optional)</option>
                            <option value="8am">8:00 AM</option>
                            <option value="9am">9:00 AM</option>
                            <option value="11am">11:00 AM</option>
                            <option value="330pm">3:30 PM</option>
                    </select>
                    
                    <select className="p-2 custom-select mb-3" onChange={e => this.setState({professor: e.target.value})}>
                        <option value="None" defaultValue>Search By Professor (required)</option>
                            <option value="Fontenot">Mark Fontenot</option>
                            <option value="jimmydean">Jimmy Dean</option>
                            <option value="captainMorgan">Captain Morgan</option>
                            <option value="tonyStark">Tony Stark</option>
                    </select>
                    */}
                    </div>
                    <button type="button" className="btn btn-primary rounded" onClick={() => this.search()}>Search</button>
                </form>
            </div>
          </>
        )
      }

}//end CourseSearch
