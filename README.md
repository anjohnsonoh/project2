# School Management App - Project 2
*Due Monday April 11th, 2022*
## Description
Anjoli Academic Management System is a web-based management system that allows users to assign themselves to various course sections and track their attendance.
Students can create an account, select their course section/teacher, and submit attendance sheets.
Teachers can assign students to their section and approve or deny attendance sheets for their students.

## Purpose
This project is a test at creating a front end and backend communication system using springboot and angular.

## Tech Stack
* Java 8
* Angular 10
* Postgres
* AWS RDS
* Spring Boot
* Spring MVC
* Spring Data
* JPA

## User Stories

### Student User Stories
* Students can login
* Students can logout
* Students can view their homepage
* Students can view their information
* Students can update their information
* Students can view their attendance
* Students can submit new attendance sheets

### Teacher User Stories
* Teachers can login
* Teachers can logout
* Teachers can view their homepage
* Teachers can view their information
* Teachers can update their information
* Teachers can view all students enrolled in their section
* Teachers can add new students to their section
* Teachers can remove students from their section
* Teachers can view all attendance sheets
* Teachers can approve or deny newly submitted attendance sheets


### To-do list
- Get a Grades Entity that can be created by teachers and seen by the students they are for


## Getting Started
open git bash to directory you wish to clone to, run "git clone https://github.com/anjohnsonoh/project2.git"

BackEnd: 
1. Open with project2 folder inside backend folder in eclipse, all dependencies should import thanks to maven. 
2. Ensure you have port 8090 available to run on.
3. In eclipse run com.revature.Application.java as a java application.
4. This will launch springboot and start running all pages for requests.
5. You can then run any requests through postman and test any endpoints found in the controller classes
6. If you'd like to see the backend update the database, use dbeaver to log in to the amazon rds database. Info can be found in the application.properties file


FrontEnd: 
1. Open a terminal/cmd prompt
2. cd into the git cloned project
3. cd into frontend/project2-app
4. run "npm install" in this location
5. run "ng serve" in this location
6. Go to localhost:4200/

## Usage
Once both backend and Frontend have been launched, you can create a student or teacher account, login, and test out the user stories listed above by following the routing on the various pages.


## Authors

[Andrew Johnson](https://github.com/anjohnsonoh)

[Jasmyn Medina](https://github.com/jasmynmedina)

[Navjot Lidder](https://github.com/1navi1)

[Kiana Hawks](https://github.com/kth29)

## License
