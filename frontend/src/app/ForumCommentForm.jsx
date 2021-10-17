import React from "react";
//import {Comment} from '../models/Comment';

export class ForumCommentForm extends React.Component{

    constructor(props) {
        super(props);
        this.userID = localStorage['userID'];
        this.username = localStorage['username'];

        this.state = {
            userID: this.userID,
            title: '',
            body: ''
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
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="rating" id="username" value={this.username} readOnly/>
                        </div>
                        <div className = "form-group col-md-7">
                            <label htmlFor="inputTitle">Title</label>
                            <input type="text" className="form-control" name="title" id="title" onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                    </div>
                    <div className = "form-group">
                        <label htmlFor="inputComment">Comment</label>
                        <textarea name="comment" id="comment" className="form-control" onChange={e => this.setState({body: e.target.value})}></textarea>
                    </div>
                    <div className = "form-group">
                        <button type = "button" className = "btn btn-primary"
                            onClick = { () => this.addReview() } >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </>)
    }

    addReview = () => {
        var prod = new Comment(
            this.state.userID,
            this.courseID,
            this.state.title,
            this.state.body
        )
        this.props.onReviewAdded(prod);
        this.setState({
            userID: this.state.userID,
            courseID: this.courseID,
            title: '',
            body: ''
        })
    }
    
}
export default ForumCommentForm;
