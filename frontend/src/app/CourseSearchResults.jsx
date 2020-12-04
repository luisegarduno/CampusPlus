import React from "react";
import _ from 'lodash';
import { ClassesRepository} from '../Api/classesRepository';
import { Header } from './Header';

export class CourseSearchResults extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            classes: this.props.location.state.classes,
            sortDirection: 'asc',
        };

        this.classRepo = new ClassesRepository();
        this.formatDate = this.formatDate.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.formatSemester = this.formatSemester.bind(this);

    }//end state

    sortBy(field) {
        if (this.state.sortDirection === 'asc') {
            this.setState({sortDirection: 'desc'})
            this.setState({classes: _.orderBy(this.state.classes, field, this.state.sortDirection)
            });
        }
        if (this.state.sortDirection === 'desc') {
            this.setState({sortDirection: 'asc'})
            this.setState({classes: _.orderBy(this.state.classes, field, this.state.sortDirection)
            });
        }
    }

    formatSemester(semester, year){
        if(semester === 1){
            return 'Fall ' + String(year);
        }

        if(semester === 2){
            return 'Spring ' + String(year);
        }
    }

    formatTime(myTime){
        var timeValue;
        var time = String(myTime);
        time = time.split(':');

        var hours = Number(time[0]);
        var minutes = Number(time[1]);

        if (hours > 0 && hours <= 12) timeValue= "" + hours;
        else if (hours > 12) timeValue= "" + (hours - 12);
        else if (hours === 0) timeValue= "12";

        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
        timeValue += (hours >= 12) ? " P.M." : " A.M.";

        return timeValue;
    }

    formatDate(myDate){
        var date = String(myDate);
        if(date === 'null'){
            return '-';
        }

        var properDate =  date.substring(5,7) + "-" + date.substring(8,10) + "-" + date.substring(0,4); 
        return properDate;
    }


    render() {
        return(<>
            
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary ">Course Search Results</span>
            </nav>

            <div className = "container-fluid container-lg" id="content">
            <div className = "text-center mx-auto">
                
                <div className="p-3 container">
                    <h2 className = " p-3 text-center text-dark">Courses Offered</h2>
                <table className="table table-striped table-bordered">
                    <thead className = "thead-dark">
                        <tr>
                            <th scope="col">Course ID</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Offered Term</th>
                            <th scope="col">Professor</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.classes.map((x) =>
                        <tr key = {x.classID}>
                            <td>{x.classID}</td>
                            <td>{x.description}</td>
                            <td>{this.formatSemester(x.seasonOffered,x.yearOffered)}</td>
                            <td>{x.teacherName}</td>
                            <td>{this.formatTime(x.classTimeStart)}</td>
                            <td>{this.formatTime(x.classTimeEnd)}</td>
                        </tr>
                    )}
                    {/*
                        <tr>
                            <td>ASIM 1310</td>
                            <td>Creative Coding 1</td>
                            <td>MWF</td>
                            <td>James Burns</td>
                            <td>10:00 AM</td>
                            <td>10:50 AM</td>
                        </tr>
                    */}
                    </tbody>
                </table>
                <div className ="p-3 btn-group" role="group">
                    <button className="btn btn-primary btn-md btn-primary" onClick={() => this.props.history.push("/courses/search")}>Cancel</button>
                </div>
            </div>
            </div>
            </div>
          </>
        )
      }
}//end CourseList