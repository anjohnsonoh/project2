import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  public students: Student[] | undefined;
  public loggedInUser: Student | undefined;
  constructor(private studentService: StudentService){
    console.log("Called")
   }
  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void{
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
