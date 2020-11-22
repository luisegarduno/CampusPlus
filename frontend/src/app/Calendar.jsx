import React from "react";
export class Calendar extends React.Component{

    render() {
        return(<>
                
         <div className ="header">
            <h1 className = "text-left bg-dark text-white">CampusPlus
                <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
            </h1>
        </div>

        <div className="p-5 card">
            <h3 className="card-header" id="mandyr"></h3>
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
                        <ul class="weekdays">
                            <li>Mo</li>
                            <li>Tu</li>
                            <li>We</li>
                            <li>Th</li>
                            <li>Fr</li>
                            <li>Sa</li>
                            <li>Su</li>
                        </ul>
                    </tr>
                </thead>
                <tbody id="calendarBody">
                    <ul class="days">  
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li><span class="active">19</span></li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
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
        )}//end return

}//end Calendar
