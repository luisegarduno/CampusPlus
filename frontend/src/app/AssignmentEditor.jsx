import React from "react";
//import { Redirect } from 'react-router-dom'
//import { ProductRepository } from '../../Api/productRepository'

export class AssignmentEditor extends React.Component{
  
  //  api = new ProductRepository();

  state = {
 
};

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
                    <div className= "card-header bg-dark text-white">
                        <h5 className="card-title">Edit Assignment</h5>
                    </div>
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Assignment Name</label>
                                    <input type="text" className="form-control" placeholder="Current Assignment Name" onChange={e => this.setState({description: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Course</label>
                                    <input type="text" className="form-control" placeholder="Current Course Name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="exampleFormControlInput1">Due Date</label>
                                    <input type="text" className="form-control" placeholder="Current Due Date"/>
                                </div>
                            </div>
                            <div className="dropdown">
                              <button className="btn btn-primary btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Assignment Type
                              </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* <a className="dropdown-item" href="#">Exam</a>     */}
                                {/* <a className="dropdown-item" href="#">Quiz</a>     */}
                                {/* <a className="dropdown-item" href="#">Paper</a>    */}
                                {/* <a className="dropdown-item" href="#">Homework</a> */}
                                {/* <a className="dropdown-item" href="#">Project</a>  */}
                               </div>
                            </div>
                        </form>
                    </div>
                
                    <div className="footer">
                        <button type="button" class="btn btn-primary btn-lg" onClick={e => this.submit()}>Save Changes</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={e => this.submit()}>Mark As Complete</button>
                    </div>
                </div>
                </div>
            </div>
            </>
        )}
}
