import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import {LoginComponent} from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'

const routes: Routes = [
  {path: 'all-students', component: AllStudentsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'register-teacher', component: RegisterTeacherComponent},
  {path: 'teacher-home', component: TeacherHomeComponent},
  {path: 'student-home', component: StudentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
