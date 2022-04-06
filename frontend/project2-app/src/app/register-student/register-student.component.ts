import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  constructor(private studentService:StudentService,
    private appComponent:AppComponent) { }

    public onAddStudent(addForm:NgForm):void{
      this.studentService.addStudent(addForm.value).subscribe(
        (response: Student) => {
          console.log(response);
          this.appComponent.getStudents();
        },
        (error: HttpErrorResponse) => { 
          alert(error.message)
        }
      )
    } 
ngOnInit(): void {
  }

}
