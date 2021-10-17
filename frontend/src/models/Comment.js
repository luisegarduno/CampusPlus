export class Comment {
    constructor(commentID, userID, courseID, title, body, postTime) {
        this.commentID = commentID;
        this.userID = userID;
        this.courseID = courseID;
        this.title = title;
        this.body = body;
        this.postTime = postTime;
    }
}