import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService,
    private appComponent: AppComponent
  ) { }

  public addTeacher(addForm: NgForm): void {
    this.teacherService.addTeacher(addForm.value).subscribe(
      (response: Teacher)=>{
        console.log(response);
        this.appComponent.getTeachers();
      },
      (error: HttpErrorResponse)=> {
        alert(error.message)
      }
    )
  }

  ngOnInit(): void {
  }

}
