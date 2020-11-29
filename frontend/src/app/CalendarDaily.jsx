import React from "react";
import { Header } from './Header';
import './daily.css';

export class CalendarDaily extends React.Component{

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Daily Schedule</span>
            </nav>

        <div className="p-3 card" >
    
         <h2>
         <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/calendars")}>Return</button>
         </h2>
         <table className="table table-bordered table-responsive-sm" id="calendar">
             <thead>
                 <tr>
                     <div class="month">      
                         <ul>
                             <li class="prev">&#10094;</li>
                             <li class="next">&#10095;</li>
                             <li>
                            
                           November
                             <br></br>
                             2020
                             </li>
                         </ul>
                        
                     </div>
                  
                 </tr>
            
             </thead>
             <tbody id="calendarBody">
           
                 <ul class="days">  
                 <h2 id="calDay">Monday</h2>
             
                     <li id ="1">math</li>
                     <br></br>
                     <li>science</li>
                     <br></br>
                     <li>english</li>
                     <br></br>
                     <li>yuh</li>
                     <br></br>
                     <li> PRW</li>
                     <br></br>
                     <li>comp sci</li>
                     <br></br>
                     <li> gen ed</li>
                     <br></br>
                 </ul>
             </tbody>
         </table>
     <div className="form-inline ">
         <button className="btn btn-primary col-sm-3" id="pre" onclick="pre()">Previous Month</button>
         <button className="btn btn-primary col-sm-3" id="nex" onclick="nex()">Next Month</button>
     </div>
     <br/>
 </div>
        </>
        )
    }
}
