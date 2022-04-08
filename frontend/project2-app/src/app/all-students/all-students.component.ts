import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {


  public student: Student;
  public students: Student[] | undefined;
  constructor(private studentService: StudentService, 
    private route: ActivatedRoute, private router: Router) {
      this.student={
        id:0,
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        attendance:0,
        teacher:""
      }
    }


    public getStudents() {
      this.studentService.getStudents().subscribe(
        (response: Student[]) => {
          this.students= response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

  ngOnInit(): void {
    this.getStudents();
  }

}
