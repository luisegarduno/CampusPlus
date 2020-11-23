import React from "react";
export class CourseSearch extends React.Component{

    render() {
        return(<>
            <div className ="header">
                <h1 className = "text-left bg-dark text-white">CampusPlus
                    <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/welcomepages")}>Log Out</button>
                </h1>
            </div>
                
            <div className="p-5 container-sm">
                <div className = "p-2 card text-center w-50 mx-auto">
                    <div className = "form-group">
                    <div className= "card-header">
                        <h5 className="card-title">Course Finder</h5>
                    </div>
                    
                    <div className="footer">
                    <button className="btn btn-primary rounded" onClick={() => this.props.history.push("/homepages")}>Search</button>
                </div>
                </div>
                </div>
            </div>
                   

          </>
        )
      }

}//end CourseSearch
