export class Assignment {
    constructor(assignmentID, courseID, description, dueDate, assignmentType, completionStatus, name, userID) {
        this.assignmentID = assignmentID;
        this.courseID = courseID;
        this.description = description;
        this.dueDate = dueDate;
        this.assignmentType = assignmentType;
        this.userID = userID;
        this.completionStatus = completionStatus;
        this.name = name;
    }
}
