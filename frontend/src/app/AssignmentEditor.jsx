import React from "react";
import { AssignmentRepository } from '../Api/assignmentRepository'
import { Header } from './Header';

export class AssignmentEditor extends React.Component{
  
    assignment = new AssignmentRepository();

    state = {
    };

    render() {
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Edit Assignment</span>
            </nav>
            <div className="p-3 container-fluid container-lg">
                <div className = "card text-center mb-1 w-75 mx-auto">
                    <div className = "jumbotron-fluid h-75 bg-light text-white text-center">
                        <h4 className="p-4 card-title font-weight-bold">Edit Assignment</h4>
                    </div>
                    <div className = "form-group">
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="assignmentName">Assignment Name</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.setState({description: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="courseInput">Course</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="dateInput">Due Date</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="descriptionInput">Description</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                            </div>
                            <div className="dropdown">
                              <button className="btn btn-dark btn-lg btn-md dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                            <div className="p-3 form-row justify-content-center">
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Save Changes</button>
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Mark As Complete</button>
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.submit()}>Delete</button>
                            </div>
                        </form>
                    </div>   
                </div>
                
                </div>
            </div>
            </>
        )}
}
