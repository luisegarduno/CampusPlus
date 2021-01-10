-- create user called `admin` with password `Password`
CREATE USER 'admin'@'%' IDENTIFIED BY 'Password';

-- give access to admin on db
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
GRANT ALL PRIVILEGES ON `campusplus` TO 'admin'@'%';
-- GRANT ALL PRIVILEGES ON `campusplus` TO 'admin'@'localhost';

-- set password method to native password for mysql workbench access (mysql 8 issue)
ALTER USER 'admin'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Password';

-- flush them privileges
FLUSH PRIVILEGES;