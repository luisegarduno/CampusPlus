import React from "react";
export class Calendar extends React.Component{

    render() {
        return(<>


<div class="card">
<h3 class="card-header" id="mandyr"></h3>
<table class="table table-bordered table-responsive-sm" id="calendar">
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
</tbody>
</table>
<div class="form-inline">
<button class="btnbtn-outline-primary col-sm-3" id="pre" onclick="pre()">Pre</button>
<button class="btnbtn-outline-primary col-sm-3" id="nex" onclick="nex()">Nex</button>
</div>
<br/>
</div>//end


            </>
        )}//end return

}//end Calendar