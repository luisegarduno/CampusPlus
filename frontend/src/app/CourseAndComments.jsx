import React, { Component } from 'react';
import CommentList from './CommentList';
import ForumCommentForm from './ForumCommentForm';
// import { ClassesRepository } from '../Api/classesRepository';
import { CommentRepository } from '../Api/commentRepository';
// import { Course } from '../models/Course';
import { Header } from './Header';

export class CourseAndComments extends Component {

    constructor(props) {
        super(props);
        this.userID = localStorage['userID'];
        this.courseID = this.props.match.params.courseID;

        this.state = {
            userID: this.userID,
            reviews: [],
            course: {
                reviews: []
            }
            //class: {
            //    courseID: this.props.match.params.courseID,
            //    description: '',
            //    reviews: []
            ///}
        };
        //this.courseRepo = new ClassesRepository();
        this.commentRepo = new CommentRepository();
        
    }

    componentDidMount(){
        //this.courseRepo.getCourses(this.courseID)
        this.commentRepo.getClassComments(this.courseID)
        .then(res => {
            this.setState({reviews: res})
            console.log(res)
            //res.data.forEach((ele) => {
                ////this.setState({class:[...this.state.class, new Course(ele.courseID, ele.courseDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.courseTimeStart, ele.courseTimeEnd, ele.instructor)]});
                //this.setState({reviews:[...this.state.reviews, new Comment(ele.commentID, ele.userID, ele.courseID, ele.title, ele.body, ele.postTime)]});
                //this.setState({reviews:[...this.state.reviews, new Comment(ele.userID, ele.courseID, ele.title, ele.body)]});
            //});
            console.log(this.state)
        })
        
        .catch(res => console.log(res));
    }

    render() { 
        //let description = this.props.match.params.description;
        return ( 
            <>
                <Header />
                <nav className="navbar bg-white">
                    <span className="mb-0 h5 text-primary">Course Review</span>
                </nav>
                    <div className="row text-dark" key={this.courseID}>
                        <h1 className="text-dark">.</h1>
                        {/*<h4>- {this.courseID}</h4>*/}
                        <div className="col-6">
                            <br/>
                            <h6 className="text-muted">Course #: {this.courseID}</h6>
                        </div>
                    </div>

                {
                        this.state.course.reviews && ( <>
                            <CommentList reviews={this.state.reviews} />
                            <br/>
                            <ForumCommentForm onReviewAdded={reviews => {
                                this.setState(prevState => {
                                    prevState.course.reviews.push(reviews);
                                    return prevState;
                                });
                                //addClassComment(userID, courseID, title, body){
                                this.commentRepo.addClassComment(this.state.userID, this.courseID, this.state.course.reviews.title, this.state.course.reviews.body);
                                    }}/>
                                </>)
                            }
                        </>
                    );
                }


}
 
export default CourseAndComments;