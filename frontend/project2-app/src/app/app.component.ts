import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Attendance } from './attendance';
import { AttendanceService } from './attendance.service';
import { Student } from './student';
import { StudentService } from './student.service';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public students: Student[] | undefined;
  public teachers: Teacher[] | undefined;
  public attendance: Attendance[] | undefined;
  getStudents() {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  getTeachers() {
    this.teacherService.getTeachers().subscribe 
    (
      (response: Teacher[])=>{
        this.teachers=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  getAttendance() {
    this.attendanceService.getAttendance().subscribe (
      (response: Attendance[])=> {
        this.attendance=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  title = 'project2-app';
  constructor(private studentService: StudentService, private teacherService: TeacherService, private attendanceService: AttendanceService){

   }

  ngOnInit(): void {
  }


}
