import React from "react";
import { Header } from './Header';
import './daily.css';
import {AssignmentRepository} from "../Api/assignmentRepository";
import {Assignment} from "../models/Assignment";

export class CalendarDaily extends React.Component{

    constructor(props){
        super(props);
        this.userID = localStorage['userID'];
    

        this.state = {
            day: this.props.location.state.day,
            month: this.props.location.state.month,
            year: this.props.location.state.year,
            assignments: [],
        }
        this.ProductRepo = new AssignmentRepository();
        this.displayAssignments()

     }

     async findAssignments(){
        
        //console.log(date);
        console.log(this.userID);
        //var assignments = null;
       // var course = [];
       console.log(this.ProductRepo.getAssignments(this.userID));
        return (await this.ProductRepo.getAssignments(this.userID));
           

   }

   async displayAssignments(){
    var assignments = (await this.findAssignments()).data;
    assignments.forEach(ele => {
     if (ele.dueDate){
         var newDate = new Date(ele.dueDate);
         //console.log(newDate);
         console.log(newDate.getDate());
         console.log(this.state.day);
         
         if((this.state.day === newDate.getDate()+1)&&(this.state.month === newDate.getMonth()+1)&&(this.state.year === newDate.getFullYear())){

             this.setState({assignments:[...this.state.assignments, new Assignment(ele.assignmentID, ele.classID, ele.description, ele.dueDate, ele.assignmentType, ele.completionStatus, ele.name, ele.userID)]});
                      

         }
         
         
     }
 })
    console.log(this.state.assignments);

}

  

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Daily Schedule</span>
            </nav>

        <div className="p-3 card" >
    
         <h2>
         <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/calendar")}>Return</button>
         </h2>
         <table className="table table-bordered table-responsive-sm" id="calendar">
             <thead>
                 <tr>
                     <div className="month">      
                         <ul>
                             <li>
                            
                           {this.state.month}
                             <br></br>
                             {this.state.year}
                             </li>
                         </ul>
                        
                     </div>
                  
                 </tr>
            
             </thead>
             <tbody id="calendarBody">
              <br></br>
             <h2 id="calDay">{this.state.day}</h2> 
             { this.state.assignments.map((x) =>
                        <tr key = {x.assignmentID}>
                            <td className = "text-center">{x.name}</td>
                            
                            </tr>)}

                        
                             
                   {/* <ul className="dayz">  
                 <br></br> */}
                 
                
                  
                     {/* <li>{this.state.assignments}</li>
                     <br></br> */}
                     
                 {/* </ul>   */}
                 
                
             </tbody>
         </table>
     <br/>
 </div>
        </>
        )
    }
}