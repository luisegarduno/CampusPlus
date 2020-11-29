export class Assignment {
    constructor(assignmentID, classID, userID, name, description, dueDate, assignmentType, completionStatus) {
        this.assignmentID = assignmentID;
        this.classID = classID;
        this.userID = userID;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.assignmentType = assignmentType;
        this.completionStatus = completionStatus;
    }
}