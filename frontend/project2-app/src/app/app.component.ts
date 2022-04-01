import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2-app';
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
