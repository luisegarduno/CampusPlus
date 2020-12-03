export class User {
    constructor(userID, username, email, isAdmin, password, grade, school, major, gradDate) {
        this.userID = userID;
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;
        this.password = password;
        this.grade = grade;
        this.school = school;
        this.major = major;
        this.gradDate = gradDate;
    }
}