import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';

const routes: Routes = [
  {path: 'all-students', component: AllStudentsComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'register-teacher', component: RegisterTeacherComponent},
  {path: 'teacher-home', component: TeacherHomeComponent},
  {path: 'student-home', component: StudentHomeComponent},
  {path: 'student-login', component: StudentLoginComponent},
  {path: 'teacher-login', component: TeacherLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
