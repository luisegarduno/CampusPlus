import React from 'react';
//import { ClassesRepository } from '../Api/classesRepository';
//import { CommentRepository } from '../Api/commentRepository';

const CommentList = (props) => {

    if (props.reviews.length === 0){
        return (
            <>
            <div className = "container-fluid container-md">
                <h3>Course Reviews <span className="text-muted">({props.reviews.length})</span></h3>
                <div className="bg-light">
                    <p className="text-body p-3">Be the first to review!</p>
                </div>
            </div>
            </>
        );
    }else {
        return ( 
            <>
            <div className = "p-2 container-fluid container-md">
                <h3>Course Reviews <span className="text-muted">({props.reviews.data.length})</span></h3>
            </div>
            <div className="card">
            {
                props.reviews.data.map(x => {
                    return (
                        <div className = "p-2 container-fluid container-md" key={x.commentID}>
                            <div className="row">Title: {x.title}</div>
                            <div className="card-body row">
                                <div className="col-9">
                                    <p>"{x.body}" - {x.username}</p>
                                </div>
                                <div className="col-3">
                                    <p className="float-right text-muted"></p>
                                </div>  
                                <div className="col-md-12 mb-4">
                                    <button type="button" className="btn btn-primary px-3"><i className="far fa-thumbs-up" aria-hidden="true"></i></button>
                                    <button type="button" className="btn btn-primary px-3"><i className="far fa-thumbs-down" aria-hidden="true"></i></button>
                                    <button type="button" className="btn btn-primary px-3"><i className="fas fa-flag" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            </>
        );
    }
}
 
export default CommentList;