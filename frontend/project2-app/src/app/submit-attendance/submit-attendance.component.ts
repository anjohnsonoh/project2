import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-submit-attendance',
  templateUrl: './submit-attendance.component.html',
  styleUrls: ['./submit-attendance.component.css']
})
export class SubmitAttendanceComponent implements OnInit {


  public attendance: Attendance;
  public student: Student;
  constructor(private studentService: StudentService, private attendanceServie: AttendanceService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private appComponent: AppComponent) { 
      this.student={
        id:0,
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        Attendance:0,
        teacher:""
      }
    this.attendance={
      id:0,
      studentName:"",
      wasPresent:false,
      excuse:"",
      receipt:0,
      approved:false

    }
  }

  ngOnInit(): void {
    this.getAttendance();
  }

  getAttendance(): void {
    this.attendanceServie.getAttendanceByStudent(localStorage.getItem('loggedInStudent') || '').subscribe(
      (data:Attendance)=>{
        this.attendance = data as Attendance;
        console.log(data);
      }
    ),
    (error: HttpErrorResponse)=>{
      alert(error.message);
    } 
  }

  submitAttendance(addForm: NgForm): void {
    this.attendanceServie.addAttendance(addForm.value).subscribe(
    (response: Attendance)=> {
      this.attendanceServie.addAttendance(addForm.value).subscribe(
        (esponse: Attendance)=>{
          this.appComponent.getStudents();
        }
      )
    },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }
}