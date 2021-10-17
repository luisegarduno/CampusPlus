export class Course {
    constructor(courseID, courseDaysID, description, yearOffered, seasonOffered, courseTimeStart, courseTimeEnd, instructor) {
        this.courseID = courseID;
        this.courseDaysID = courseDaysID;
        this.description = description;
        this.yearOffered = yearOffered;
        this.seasonOffered = seasonOffered;
        this.courseTimeStart = courseTimeStart;
        this.courseTimeEnd = courseTimeEnd;
        this.instructor = instructor;
    }
}