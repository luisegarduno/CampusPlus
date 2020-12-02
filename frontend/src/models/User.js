export class User {
    constructor(userID, username, password, email, grade, school, major, gradDate, isAdmin) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.email = email;
        this.grade = grade;
        this.school = school;
        this.major = major;
        this.gradDate = gradDate;
        this.isAdmin = isAdmin;
    }
}