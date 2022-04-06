import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public students: Student[] | undefined;
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
  title = 'project2-app';
  constructor(private studentService: StudentService){

   }

  ngOnInit(): void {
  }


}
