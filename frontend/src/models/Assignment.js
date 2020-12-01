export class Assignment {
    constructor(assignmentID, classID, description, dueDate, assignmentType, completionStatus, name, userID) {
        this.assignmentID = assignmentID;
        this.classID = classID;
        this.description = description;
        this.dueDate = dueDate;
        this.assignmentType = assignmentType;
        this.userID = userID;
        this.completionStatus = completionStatus;
        this.name = name;
    }
}
