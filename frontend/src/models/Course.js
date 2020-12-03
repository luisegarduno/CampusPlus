export class Course {
    constructor(classID, classDaysID, description, yearOffered, seasonOffered, classTimeStart, classTimeEnd, teacherName) {
        this.classID = classID;
        this.classDaysID = classDaysID;
        this.description = description;
        this.yearOffered = yearOffered;
        this.seasonOffered = seasonOffered;
        this.classTimeStart = classTimeStart;
        this.classTimeEnd = classTimeEnd;
        this.teacherName = teacherName;
    }
}
