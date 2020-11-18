import React from "react";
export class Calendar extends React.Component{

    render() {
        return(<>


<div className="p-5 card">
    <h3 className="card-header" id="mandyr"></h3>
        <table className="table table-bordered table-responsive-sm" id="calendar">
            <thead>
            <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            </thead>
            <tbody id="calendarBody">
            <tr>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
                <col></col>
            </tr>
            </tbody>
        </table>
        <div className="form-inline">
            <button className="btn btn-primary col-sm-3" id="pre" onclick="pre()">Previous Month</button>
            <button className="btn btn-primary col-sm-3" id="nex" onclick="nex()">Next Month</button>
        </div>
        
    <br/>
</div>


            </>
        )}//end return

}//end Calendar