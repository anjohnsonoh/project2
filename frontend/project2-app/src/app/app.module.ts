import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AllStudentsComponent } from './all-students/all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterStudentComponent,
    RegisterTeacherComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    AllStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
