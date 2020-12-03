import React from "react";
import './Calendar.css';
//import {Assignments} from '../models/Assignment';
import { AssignmentRepository } from '../Api/assignmentRepository';
import { Header } from './Header';

export class Calendar extends React.Component{

    constructor(){
super();
this.userID = localStorage['userID'];
this.state ={
    
    
    userID: this.userID,
    month: '',
    year: '',
    //course: [],
    
}

this.returnDate();
this.ProductRepo = new AssignmentRepository();
    }

//      findAssignments(date){
        
//         console.log(date);
//         console.log(this.userID);
//         var assignments = null;
//         var course = [];
//         this.ProductRepo.getAssignments(this.state.userID)
//             .then(res => {
//                 assignments = res.data;
//                 assignments.forEach(element => {
//                     if (element.dueDate){
//                         var newDate = this.formatDate(element.dueDate);
//                         console.log(newDate);
//                         let split = newDate.split('-');
//                         console.log("split1", split[1]);
//                         if(date === split[1]){
//                             //console.log('assignment', element);
//                             course.push(element.name);
//                             localStorage.setItem('course', course);
//                             console.log(course);
//                             //  localStorage.setItem('assignment', element.name);
//                              localStorage.setItem('date', split[1] );
                       

//                         }
//                          else{
//                             // localStorage.setItem('course', " ");
//                             // localStorage.setItem('date', );


//                         }
//                        //console.log(course);
//                         this.props.history.push("/daily");
//                     }
//                 });
//             })
//             .catch(err => console.log(err));

//         // if(this.ProductRepo.getAssignments().dueDate === date){

//         // }

//    }

findAssignments(date){
        console.log(this.state.month);

        this.props.history.push({
            pathname: `/Calendar/${date}/${this.state.month}/${this.state.year}`,
            state: {day: date, month: this.state.month, year:this.state.year }
        });
        

    
}

    componentDidMount(){
        this.returnDate();

        this.findDay();
     
    }

    returnDate(){
        var d = new Date();
        this.setState({month:d.getMonth()+1});
        this.setState({year:d.getFullYear()});
     }

      findDay(){
            var x = new Date();
         var selected = document.getElementById(x.getDate()); 
         console.log(selected);
          selected.className = "active";
      }
      formatDate(myDate){
        var date = String(myDate);
        if(date === 'null'){
            return '-';
        }


        var properDate =  date.substring(5,7) + "-" + date.substring(8,10) + "-" + date.substring(0,4); 
        return properDate;
    }

    nextMonth(){
        
        if(this.state.month != 12){
            this.setState({month: (this.state.month + 1)});
        }
        else{
            console.log(this.state.year);
            var year = (this.state.year+1);
            this.setState({year: year});
            this.setState({month: 1});
            console.log(this.state.year);
        }

    }

    prevMonth(){

        if(this.state.month != 1){
            this.setState({month: (this.state.month - 1)});
        }
        else{
            this.setState({year: (this.state.year- 1)});
            this.setState({month: 12});
        }

    }
    


    render() {
        return(<>
                
        <Header />
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Monthly Calendar</span>
        </nav>

        <div className="p-5 card">
            <h3 className="card-header" id="mandyr"></h3>
            <table className="table table-bordered table-responsive-sm" id="calendar">
                <thead>
                    <tr>
                        <div className="month">      
                            <ul>
                                <li className="prev" onClick={()=>this.prevMonth()}>&#10094;</li>
                                <li className="next" onClick={()=>this.nextMonth()}>&#10095;</li>
                                <li>                              
                               {this.state.month}
                                <br></br>
                                {this.state.year}
                                </li>
                            </ul>
                        </div>
                        <ul className="weekdays">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                    </tr>
                </thead>
                <tbody id="calendarBody">
                    <ul className="days">  
                    <li onClick={()=> this.findAssignments(1)} ><span id ="1">1</span></li>
                     <li onClick={()=> this.findAssignments(2)} ><span id ="2">2</span></li>
                     <li onClick={()=> this.findAssignments(3)} ><span id ="3">3</span></li>
                     <li onClick={()=> this.findAssignments(4)} ><span id ="4">4</span></li>
                     <li onClick={()=> this.findAssignments(5)} ><span id ="5">5</span></li>
                     <li onClick={()=> this.findAssignments(6)} ><span id ="6">6</span></li>
                     <li onClick={()=> this.findAssignments(7)} ><span id ="7">7</span></li>
                     <li onClick={()=> this.findAssignments(8)} ><span id ="8">8</span></li>
                     <li onClick={()=> this.findAssignments(9)} ><span id ="9">9</span></li>
                     <li onClick={()=> this.findAssignments(10)} ><span id ="10">10</span></li>
                     <li onClick={()=> this.findAssignments(11)} ><span id ="11">11</span></li>
                     <li onClick={()=> this.findAssignments(12)} ><span id ="12">12</span></li>
                     <li onClick={()=> this.findAssignments(13)} ><span id ="13">13</span></li>
                     <li onClick={()=> this.findAssignments(14)} ><span id ="14">14</span></li>
                     <li onClick={()=> this.findAssignments(15)} ><span id ="15">15</span></li>
                     <li onClick={()=> this.findAssignments(16)} ><span id ="16">16</span></li>
                     <li onClick={()=> this.findAssignments(17)} ><span id ="17">17</span></li>
                     <li onClick={()=> this.findAssignments(18)} ><span id ="18">18</span></li>
                     <li onClick={()=> this.findAssignments(19)} ><span id ="19">19</span></li>
                     <li onClick={()=> this.findAssignments(20)} ><span id ="20">20</span></li>
                     <li onClick={()=> this.findAssignments(21)} ><span id ="21">21</span></li>
                     <li onClick={()=> this.findAssignments(22)} ><span id ="22">22</span></li>
                     <li onClick={()=> this.findAssignments(23)} ><span id ="23">23</span></li>
                     <li onClick={()=> this.findAssignments(24)} ><span id ="24">24</span></li>
                     <li onClick={()=> this.findAssignments(25)} ><span id ="25">25</span></li>
                     <li onClick={()=> this.findAssignments(26)} ><span id ="26">26</span></li>
                     <li onClick={()=> this.findAssignments(27)} ><span id ="27">27</span></li>
                     <li onClick={()=> this.findAssignments(28)} ><span id ="28">28</span></li>
                     <li onClick={()=> this.findAssignments(29)} ><span id ="29">29</span></li>
                     <li onClick={()=> this.findAssignments(30)} ><span id ="30">30</span></li>
                     <li onClick={()=> this.findAssignments(31)} ><span id ="31">31</span></li>
                    </ul>
                </tbody>
            </table>
            <div className="form-inline ">
            <button className="btn btn-primary col-sm-3" id="pre" onClick={()=>this.prevMonth()}>Previous Month</button>
            <div className="col-sm-3"></div>
            <button className="btn btn-primary col-sm-3" id="nex" onClick={()=>this.nextMonth()}>Next Month</button>
        </div>
        <br/>
    </div>

         </>
        )}//end return

}//end Calendar
