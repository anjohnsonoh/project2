import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {


  public student: Student;
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {
      this.student={
        id:0,
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        Attendance:0
      }
    }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(): void {
    this.studentService.getStudentByUsername(localStorage.getItem('loggedInStudent') || '').subscribe(
      (data:Student)=>{
        this.student = data as Student;
        console.log(data);
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    logout(): void{
      console.log("logout")
      localStorage.setItem('loggedInStudent', '');
      this.router.navigate(['/student-login'])
    }

    
}
