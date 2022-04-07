import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  loggedInTeacher: Teacher;
  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private appcmp: AppComponent) {
    this.loggedInTeacher = {
      id: 0,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      role: ""
    }
  }

  ngOnInit(): void {
  }

  login(loginForm: NgForm): void
  {
    console.log(loginForm)
    this.teacherService.getTeacheByusername(loginForm.value.username).subscribe(
      (data:Teacher)=>{
        console.log(data);

        if (data.password == loginForm.value.password) {
          localStorage.setItem('loggedInTeacher', data.username);
          console.log("Login Success")
          this.router.navigate(['/teacher-home']);
        } else {
          console.log("Failed to Login")
        }
      }
    )
  }

}
