import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loggedInStudent: Student;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private appcmp: AppComponent
  ) {     this.loggedInStudent={
    id:0,
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    Attendance:0,
    teacher:""

  }}
  ngOnInit(): void {
  }

  login(loginForm: NgForm): void
  {
    console.log(loginForm)
    this.studentService.getStudentByUsername(loginForm.value.username).subscribe(
      (data:Student)=>{
        console.log(data);
        
        if (data.password == loginForm.value.password) {
          localStorage.setItem('loggedInStudent', data.username);
          console.log("Login Success")
          this.router.navigate(['/student-home']);
        } else {
          console.log("Failed to Login")
        }
      }
    )
  }
}