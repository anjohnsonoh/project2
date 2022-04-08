import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SubmitAttendanceComponent } from './submit-attendance/submit-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    AllStudentsComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    HomepageComponent,
    SubmitAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
