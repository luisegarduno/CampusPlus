import React from "react";

export class ForumCommentForm extends React.Component{
  
    render() {
        return(<>

            <div className = "p-4 container-fluid container-sm">
            <form className = "card">
                <div className = "card-header bg-dark text-light">
                   <h4 id = "addReviewTitle">Create New Comment</h4> 
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
                            onClick = { () => this.onSubmit() } >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
            <div class="col-md-12 mb-4">
                <p>buttons for posted comments</p>
                <button type="button" className="btn btn-primary px-3"><i className="far fa-thumbs-up" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-primary px-3"><i className="far fa-thumbs-down" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-primary px-3"><i className="fas fa-flag" aria-hidden="true"></i></button>
            </div>
            </div>
        </>)
    }
}
