import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  teacher: Teacher
  constructor(private teacherService:TeacherService,
    private route: ActivatedRoute,
    private router: Router) { this.teacher={
    id:0,
    username:"",
    password:"",
    firstName:"",
    lastName:"",
    role: ""
  }}

  ngOnInit(): void {
  }
  updateTeacher(teacherForm: NgForm): void
  {
    this.teacherService.getTeacheByusername(localStorage.getItem('loggedInTeacher') || '').subscribe(
      (data:Teacher)=>{
        console.log(data);
        this.teacherService.updateteacher(teacherForm.value, data.id).subscribe(
          (response:Teacher)=>{
            console.log("Successfully Updated");
            localStorage.setItem('loggedInTeacher', response.username);
            this.teacher = response;
            console.log(response);
            this.router.navigate(['teacher-home'])
          }
        )
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInTeacher', '');
    this.router.navigate(['/teacher-login'])
  }
}
