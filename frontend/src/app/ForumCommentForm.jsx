import React from "react";
//import {Comment} from '../models/Comment';

export class ForumCommentForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            userName: '',
            comment: ''
        }
    }
  
    render() {
        return(<>

            <div className = "p-4 container-fluid container-sm">
            <form className = "card">
                <div className = "card-header bg-dark text-light">
                   <h4 id = "addReviewTitle font-weight-bold">Create New Comment</h4> 
                </div>
                <div className = "p-4 cardBody">  
                    <div className ="form-row">
                        <div className = "form-group col-md-7">
                            <label htmlFor = "username">Username</label>
                            <input type = "text" className = "form-control" name = "rating" id = "enterNameInput"/>
                        </div>
                        <div className = "form-group col-md-7">
                            <label htmlFor = "username">Comment Title</label>
                            <input type = "text" 
                                className = "form-control" 
                                name = "rating" 
                                id = "enterNameInput"/>
                        </div>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "comment">Comment</label>
                        <textarea name = "comment" id = "comment" className = "form-control"></textarea>
                    </div>
                    <div className = "form-group">
                        <button
                            type = "button"
                            className = "btn btn-primary"
                            /*onClick = { () => this.addReview() }*/ >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </>)
    }

    /*
    addReview = () => {
        var prod = new Comment(
            this.state.classID, 
            this.state.description
        )
        this.props.onReviewAdded(prod);
        this.setState({
            classID: '',
            description: ''
        })
    }
    */
    
}
export default ForumCommentForm;
