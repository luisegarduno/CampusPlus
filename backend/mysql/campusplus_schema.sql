CREATE DATABASE IF NOT EXISTS `campusplus`;
USE `campusplus`;

-- -----------------------------------------------------
-- Table `campusplus`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`user` (
    `userID`          INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
    `email`           VARCHAR(45)                                                 NULL,
    `isAdmin`      TINYINT DEFAULT 0                                        NULL,
    `password`     VARCHAR(64) COLLATE utf8_bin                   NULL,
    `username`     VARCHAR(45)                                                NULL,
    `grade`           INT                                                                NULL,
    `school`          VARCHAR(45)                                                NULL,
    `major`           VARCHAR(45)                                                NULL,
    `gradDate`      DATE                                                             NULL,
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE);

INSERT INTO `campusplus`.`user` (`userID`, `email`, `isAdmin`, `password`, `username`, `grade`, `school`, `major`, `gradDate`) VALUES
            (1, 'user@uni.edu', 0, 'd74ff0ee8da3b9806b18c877dbf29bbde50b5bd8e4dad7a3a725000feb82e8f1', 'user', 0, '', '', null),
            (2, 'eSmith@uni.edu', 0, 'ae91809961c202dcefb1d44638b70c13685dbb9b47a5e7a72de4bf8b24f859e7', 'teachersPet', 2, 'Education', 'Developmental Psych', '2024-05-23'),
            (8, 'JDoe@uni.edu', 0, '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e', 'JDoe', 10, 'Engineering', 'Computer Science', null),
            (9, 'joey@uni.edu', 0, '8b2c86ea9cf2ea4eb517fd1e06b74f399e7fec0fef92e3b482a6cf2e2b092023', 'JoeyB', null, '', '', null),
            (20, 'nwesley@uni.edu', 0, '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', 'nathanwes', null, 'Business', 'Finance', null),
            (21, 'mitchm@uni.edu', 1, '5694d08a2e53ffcae0c3103e5ad6f6076abd960eb1f8a56577040bc1028f702b', 'mmor2', 0, '', '', null);


-- -----------------------------------------------------
-- Table `campusplus`.`classDays`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`courseDays` (
    `courseDaysID` INT AUTO_INCREMENT  PRIMARY KEY NOT NULL,
    `monday`          TINYINT                                                         NULL,
    `tuesday`          TINYINT                                                          NULL,
    `wednesday`     TINYINT                                                         NULL,
    `thursday`         TINYINT                                                         NULL,
    `friday`              TINYINT                                                         NULL);

INSERT INTO `campusplus`.`courseDays` (`courseDaysID`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`)  VALUES
            (1, 1, 0, 1, 0, 1), -- Monday | Wednesday | Friday
            (2, 1, 0, 0, 0, 0), -- Monday
            (3, 0, 1, 0, 1, 0), -- Tuesday | Thursday
            (4, 1, 0, 1, 0, 0), -- Monday | Wednesday
            (5, 0, 0, 1, 0, 0), -- Wednesday
            (6, 1, 1, 1, 1, 0), -- Monday | Tuesday | Wednesday | Thursday
            (7, 0, 0, 0, 1, 0), -- Thursday
            (8, 1, 1, 1, 1, 1); -- Monday | Tuesday | Wednesday | Thursday | Friday

-- -----------------------------------------------------
-- Table `campusplus`.`class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`course` (
    `courseID`              INT     PRIMARY KEY NOT NULL,
    `courseDaysID`      INT                            NOT NULL,
    `description`          VARCHAR(255)                  NULL,
    `yearOffered`         YEAR                                 NULL,
    `seasonOffered`     INT                                    NULL,
    `courseTimeStart`  TIME                                  NULL,
    `courseTimeEnd`    TIME                                 NULL,
    `instructor`            VARCHAR(100)                  NULL,
    UNIQUE INDEX `courseID_UNIQUE`(`courseID` ASC) VISIBLE,
    INDEX `courseDaysID_idx`(`courseDaysID` ASC) VISIBLE,
    CONSTRAINT `toCourseDays`
    FOREIGN KEY (`courseDaysID`)
        REFERENCES `campusplus`.`courseDays`(`courseDaysID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);

INSERT INTO `campusplus`.`course` (`courseID`, `courseDaysID`, `description`, `yearOffered`, `seasonOffered`, `courseTimeStart`, `courseTimeEnd`, `instructor`) VALUES
            (121, 7, 'Swimming', 2020, 1, '13:00:00', '16:00:00', 'Davenport'),
            (192, 7, 'Bowling', 2020, 1, '08:00:00', '09:00:00', 'Thomsen'),
            (201, 6, 'Databases ', 2020, 1, '12:00:00', '13:00:00', 'Dillingham'),
            (210, 3, 'Linear Algebra', 2020, 1, '16:00:00', '17:00:00', 'Gambarin'),
            (217, 1, 'Programming Languages', 2020, 1, '12:00:00', '13:00:00', 'Fontenot'),
            (219, 2, 'Calculus 2 ', 2020, 1, '13:30:00', '14:50:00', 'Lawrimore'),
            (222, 4, 'Philosophy ', 2019, 1, '08:00:00', '09:30:00', 'Garduno'),
            (223, 1, 'DISC', 2020, 1, '16:00:00', '17:00:00', 'Wesley'),
            (258, 1, 'Chemistry', 2020, 1, '12:45:00', '01:50:00', 'Bongar'),
            (291, 8, 'The business of business', 2020, 0, '11:30:00', '12:45:00', 'Mathers'),
            (312, 3, 'GUI', 2020, 1, '18:00:00', '19:00:00', 'Cannon'),
            (391, 5, 'Information Security', 2019, 0, '13:00:00', '13:50:00', 'Alford');

-- -----------------------------------------------------
-- Table `campusplus`.`assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`assignment` (
    `assignmentID`       INT AUTO_INCREMENT   NOT NULL,
    `courseID`               INT                                           NULL,
    `userID`                   INT                                   NOT NULL,
    `name`                    VARCHAR(45)                           NULL,
    `description`           VARCHAR(255)                         NULL,
    `dueDate`               DATETIME                                 NULL,
    `assignmentType`   VARCHAR(100)                 NOT NULL,
    `completionStatus` TINYINT DEFAULT 0                  NULL,
    PRIMARY KEY (`assignmentID`),
    UNIQUE INDEX `assignmentID_UNIQUE`(`assignmentID`ASC) VISIBLE,
    INDEX `courseID_idx` (`courseID`ASC) VISIBLE,
    INDEX `userID_idx`  (`userID` ASC) VISIBLE,
    CONSTRAINT `assignmentToCourse`
        FOREIGN KEY (`courseID`)
        REFERENCES `campusplus`.`course`(`courseID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `assignmentToUser`
        FOREIGN KEY(`userID`)
        REFERENCES `campusplus`.`user`(`userID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);

INSERT INTO `campusplus`.`assignment` (`assignmentID`, `courseID`, `userID`, `name`, `description`, `dueDate`, `assignmentType`, `completionStatus`) VALUES
            (2, 217, 1, 'Programming Languages', 'create a react script', '2020-12-11 11:59:00', 'Homework', 0),
            (4, 391, 1, 'Quiz 7', 'python quiz', '2020-12-15 11:30:00', 'Quiz', 1),
            (5, 312, 1, 'Quiz 2', 'GUI quiz', '2020-12-15 23:59:00', 'Quiz', 0),
            (21, 312, 1, 'GUI quiz review', 'A quiz review for gui', '2020-12-10 12:00:00', 'Quiz', 1),
            (31, 201, 8, 'dillogy', 'programming', '2020-12-18 10:00:00', 'Homework', 0),
            (40, 312, 1, 'Final Project', 'Do well', '2020-12-03 08:00:00', 'Project', 0),
            (41, 121, 1, 'Math HW', 'I will do calc in water', '2020-12-17 08:00:00', 'Homework', 0),
            (43, 121, 21, 'Swim 100m', 'go to the pool', '2020-12-04 09:00:00', 'Project', 1),
            (44, 312, 21, 'React hw', 'Learn', '2020-12-05 15:00:00', 'Homework', 1);

-- -----------------------------------------------------
-- Table `campusplus`.`schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`schedule` (
    `userID`       INT                     NOT NULL,
    `courseID`   INT                     NOT NULL,
    INDEX `classID_idx` (`courseID` ASC) VISIBLE,
    INDEX `userID_idx`  (`userID` ASC)  VISIBLE,
    PRIMARY KEY (`userID`, `courseID`),
    CONSTRAINT `scheduleClass`
        FOREIGN KEY (`courseID`)
        REFERENCES `campusplus`.`course` (`courseID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `scheduleUser`
        FOREIGN KEY (`userID`)
        REFERENCES `campusplus`.`user` (`userID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);

INSERT INTO `campusplus`.`schedule` (`userID`, `courseID`) VALUES
             (1,217), (1,312), (1,121);

-- -----------------------------------------------------
-- Table `campusplus`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `campusplus`.`comment` (
    `commentID` INT AUTO_INCREMENT      NOT NULL,
    `userID`          INT                                     NOT NULL,
    `courseID`      INT                                      NOT NULL,
    `title`             VARCHAR(45)                               NULL,
    `body`           VARCHAR(255)                             NULL,
    `postTime`    DATETIME                                     NULL,
    PRIMARY KEY(`commentID`),
    INDEX `userID_idx` (`userID` ASC) VISIBLE,
    CONSTRAINT `commentUser`
        FOREIGN KEY (`userID`)
        REFERENCES `campusplus`.`user`(`userID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT `commentClass`
        FOREIGN KEY (`courseID`)
        REFERENCES `campusplus`.`course`(`courseID`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);

INSERT INTO `campusplus`.`comment` (`commentID`, `userID`, `courseID`, `title`, `body`, `postTime`) VALUES
            (1, 2, 223, 'Bad', 'This is an awful class', '2020-11-22 21:50:08'),
            (2, 21, 219, 'Math', 'Math class', '2020-11-23 18:50:59');