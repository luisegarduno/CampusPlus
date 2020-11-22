import React from "react";

export class CoursesAndScheduleDash extends React.Component{

    render() {
        return(<>
             <div className ="header">
            <h1 className = "text-left bg-dark text-white">CampusPlus
                <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
            </h1>
            
            </div>
            Schedule And Courses Will be listed here
            </>
        )}

}//end CourseAndScheduleDash