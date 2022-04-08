import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { SubmitAttendanceComponent } from './submit-attendance/submit-attendance.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component'
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'all-students', component: AllStudentsComponent},
  {path: 'register-student', component: RegisterStudentComponent},
  {path: 'register-teacher', component: RegisterTeacherComponent},
  {path: 'teacher-home', component: TeacherHomeComponent},
  {path: 'student-home', component: StudentHomeComponent},
  {path: 'student-login', component: StudentLoginComponent},
  {path: 'teacher-login', component: TeacherLoginComponent},
  {path: 'submit-attendance',component: SubmitAttendanceComponent},
  {path: 'edit-info', component: EditInfoComponent},
  {path: 'view-attendance', component: ViewAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
