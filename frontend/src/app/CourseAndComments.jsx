import React, { Component } from 'react';
import CommentList from './CommentList';
import ForumCommentForm from './ForumCommentForm';
import { ClassesRepository } from '../Api/classesRepository';
import { CommentRepository } from '../Api/commentRepository';
import { Course } from '../models/Course';
import { Header } from './Header';

export class CourseAndComments extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            course: {
                classID: undefined,
                description: '',
                reviews: []
            }
        };
        this.courseRepo = new ClassesRepository();
        this.commentRepo = new CommentRepository();
        
    }

    componentDidMount(){
        this.courseRepo.getCourses(this.props.match.params.classID)
        .then(res => {
            res.forEach(ele => {
                this.setState({course:[...this.state.course, new Course(ele.classID, ele.classDaysID, ele.description, ele.yearOffered, ele.seasonOffered, ele.classTimeStart, ele.classTimeEnd, ele.teacherName)]});
            });
        })
        
        .catch(res => console.log(res));
    }

    render() { 
        //let description = this.props.match.params.description;
        return ( 
            <>
                <Header />
                <nav className="navbar bg-white">
                    <span className="mb-0 h5 text-primary">Course Review {this.state.description}</span>
                </nav>
                    <div className="row text-dark" key={this.state.classID}>
                        <h1 className="text-dark">{this.props.match.params.description}</h1>
                        <h4>{this.state.classID}</h4>
                        <div className="col-6">
                            <br/>
                            <h6 className="text-muted">{this.state.course.description}</h6>
                        </div>
                    </div>

                {


                        this.state.course.reviews && ( <>
                            <CommentList reviews={this.state.course.reviews} />
                            <br/>
                            <ForumCommentForm onReviewAdded={review => {
                                this.setState(prevState => {
                                    prevState.course.reviews.push(review);
                                    return prevState;
                                });
                                console.log(review);
                                //addClassComment(userID, classID, title, body){
                                this.commentRepo.addClassComment(this.state.course.userID, this.state.course.classID, this.state.course.title, this.state.course.body);
                                    }}/>
                                </>)
                            }
                        </>
                    );
                }


}
 
export default CourseAndComments;