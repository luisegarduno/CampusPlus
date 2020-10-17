-- create user called `student` with password `Password`
CREATE USER 'student'@'%' IDENTIFIED BY 'Password';

-- give access to manager on db
GRANT ALL PRIVILEGES ON *.* TO 'student'@'%';

-- set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'student'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- flush them privileges
FLUSH PRIVILEGES;