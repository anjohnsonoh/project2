import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public students: Student[] | undefined;
  public teachers: Teacher[] | undefined;
  getStudents() {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  getTeachers() {
    this.teacherService.getTeachers().subscribe 
    (
      (response: Teacher[])=>{
        this.teachers=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  title = 'project2-app';
  constructor(private studentService: StudentService, private teacherService: TeacherService){

   }

  ngOnInit(): void {
  }


}
