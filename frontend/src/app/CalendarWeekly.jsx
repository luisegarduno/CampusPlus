import React from "react";
import './Weekly.css';
import { Header } from './Header';

export class CalendarWeekly extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            product: {
               month: ''
            }
        };
    }
    month(){
        //var today = new Date();
        //var month = today.getMonth();
    }

    render() {
        return(<>

        <Header />
        <nav className="navbar bg-white">
            <span className="mb-0 h5 text-primary">Weekly Calendar View</span>
        </nav>
        <div className="p-3 card" >
         <h2>
             <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/calendars")}>Return</button>
         </h2>
         <table className="table table-bordered table-responsive-sm" id="calendar">
             <thead>
                 <tr>
                     <div className="month">     
                         <ul>
                             <li className="prev">&#10094;</li>
                             <li className="next">&#10095;</li>
                             <li>
                           
                           November
                             <br></br>
                             2020
                             </li>
                         </ul>
                     </div>
                     <ul class="weekdays">
                        <li>Su</li>
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                     </ul>
                 </tr>
             </thead>
             <tbody id="calendarBody">
                 <ul className="days"> 
                     <li>math</li>
                     <li>science</li>
                     <li>english</li>
                     <li>yuh</li>
                     <li> PRW</li>
                     <li>comp sci</li>
                     <li> gen ed</li>
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
