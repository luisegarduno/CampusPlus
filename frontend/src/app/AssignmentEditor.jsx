import React from "react";
import { AssignmentRepository } from '../Api/assignmentRepository'
import { Header } from './Header';

export class AssignmentEditor extends React.Component{
  
    api = new AssignmentRepository();

    constructor(){
        
        super();
        this.userID = localStorage['userID'];
       
        
        this.state ={
            
            // assignmentID: '',
            // this.userID = userID;
            // this.completionStatus = completionStatus;
            courseID: ' ',
            description: '',
            dueDate: '',
            name: '',
            userID: '',
            

        }
            
        }
        async delete(){
            this.api.deleteAssignment(this.props.location.state.assignmentID);
            await this.loadDash();


            
        }

        async editAssignment(){
            console.log(this.props.location.state.assignmentID);
            const data = 
            {
                
                name: this.state.name,
                description: this.state.assignmentDescription,
                courseDescription: this.state.courseDescription,
                dueDate: this.state.dueDate,
                assignmentType: this.state.assignmentType,
                completionStatus: 0}
               
                this.api.updateAssignment(this.props.location.state.assignmentID, data);
                await this.loadDash();

        }
        loadDash(){
            this.props.history.push('/assignments');
        }

        async markCompleted() {
            this.api.updateCompletion(this.props.location.state.assignmentID, {completionStatus: 1});
            await this.loadDash();
        }


    render() {
        //let assignmentID = this.props.match.params.assignmentID;
        return(<>
            <Header />
            <nav className="navbar bg-white">
                <span className="mb-0 h5 text-primary">Edit Assignment</span>
                <button className="btn btn-primary btn-sm float-right rounded" onClick={() => this.props.history.push("/assignments")}>Return</button>
            </nav>
            <div className="p-5 container-fluid container-lg">
                
                <div className = "card text-center mb-1 w-75 mx-auto">
                    <div className = "jumbotron-fluid h-75 bg-primary text-white text-center">
                        <h4 className="p-4 card-title font-weight-bold">Edit Assignment</h4>
                    </div>
                    <div className = "form-group">
                    <div className = "card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="assignmentName">Assignment Name</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.setState({name: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="courseInput">Course</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.setState({courseDescription: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="dateInput">Due Date</label>
                                    <input type="date" className="form-control" placeholder="" onChange={e => this.setState({dueDate: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col text-left">
                                    <label htmlFor="descriptionInput">Description</label>
                                    <input type="text" className="form-control" placeholder="" onChange={e => this.setState({assignmentDescription: e.target.value})}/>
                                </div>
                            </div>
                            <div className="form-row">
                            <div className = "form-group">
                            <label htmlFor="AssignmentType">Assignment Type</label>
                              <select id = "AssignmentType" onChange={e => this.setState({assignmentType: e.target.value})}>
                              <option value = "-1" defaultValue>Choose...</option>
                                <option value = "Exam">Exam</option>    
                                <option value = "Quiz">Quiz</option>    
                                <option value = "Paper">Paper</option>   
                                <option value = "Homework">Homework</option>
                                <option value = "Project">Project</option> 
                               
                               </select>
                               </div>
                            </div>
                            <div className="p-3 form-row justify-content-center">
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.editAssignment()}>Save Changes</button>
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.markCompleted()}>Mark As Complete</button>
                                    <button type="button" className="btn btn-primary btn-md btn-primary" onClick={e => this.delete()}>Delete</button>
                            </div>
                        </form>
                    </div>   
                </div>
                
                </div>
            </div>
            </>
        )}
}

