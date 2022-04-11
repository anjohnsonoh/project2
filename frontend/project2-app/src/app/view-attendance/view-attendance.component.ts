import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  public listAttendance: Attendance[] | undefined;
  public attendance: Attendance;
  public teacherLoggedIn: boolean;
  public studentLoggedIn: boolean;
  constructor(private attendanceService: AttendanceService,
    private router: Router,
    private studentService: StudentService) {
    console.log("Attendance Service called")
    this.attendance={
      id:0,
      studentName:"",
      wasPresent:false,
      excuse:"",
      receipt:0,
      approved:false
    }
    this.teacherLoggedIn = false;
    this.studentLoggedIn = false;
  }
  ngOnInit(): void {
    this.getAllAttendance();
    if(localStorage.getItem("loggedInStudent") == '')
    {
      this.teacherLoggedIn = true;
      this.getAllAttendance();
    }
    else if(localStorage.getItem("loggedInTeacher") == '')
    {
      this.studentLoggedIn = true;
      this.getStudentAttendance();
    }
  }

  public getAllAttendance(): void{
    this.attendanceService.getUnapproved().subscribe(
      (response: Attendance[])=>{
        this.listAttendance = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public getStudentAttendance(): void{
    console.log("student Attendance")
    this.studentService.getStudentByUsername(localStorage.getItem("loggedInStudent") ||'').subscribe(
      (data: Student)=>
      {
        this.attendanceService.getAttendanceByStudent(data.id).subscribe(
          (response: Attendance[])=>{
            this.listAttendance = response;
          },
          (error: HttpErrorResponse)=>{
            alert(error.message);
          }
        )
      }
    )
    
  }
  /*public updateAttendance(attendance: Attendance): void{
    this.attendanceService.getAttendanceByStudent(attendance.studentName || '').subscribe(
      (data:Attendance)=>{
        console.log(data)
        attendance.id = data.id;
        attendance.studentName = data.studentName;
        attendance.wasPresent = data.wasPresent;
        attendance.excuse = data.excuse;
        attendance.receipt = data.receipt;
        attendance.approved = data.approved;
    this.attendanceService.updateAttendance(attendance, attendance.id).subscribe(
      (response: Attendance)=>{
        console.log("Successful Update")
        this.attendance=response;
        console.log(response)
      }
      )
      },
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }*/

  public approve(approvedAttendance: Attendance): void{
    console.log("approve");
    this.attendanceService.approveAttendance(approvedAttendance, approvedAttendance.id).subscribe(
      (response: Attendance)=>{
        console.log(response);
        this.getAllAttendance();
        this.studentService.incrementAttendance(approvedAttendance.receipt).subscribe(
          (student: Student)=>
          {
            console.log(student);
          }
        )
      }
    ),
    (error: HttpErrorResponse) => {alert(error.message)}
    /*this.attendanceService.getAttendanceByStudent(this.attendance.studentName || '').subscribe(
      (data:Attendance)=>{
        console.log(data)
        this.attendance.id = data.id;
       this. attendance.studentName = data.studentName;
        this.attendance.wasPresent = data.wasPresent;
        this.attendance.excuse = data.excuse;
        this.attendance.receipt = data.receipt;
        this.attendance.approved = true;
    this.attendanceService.updateAttendance(this.attendance, this.attendance.id).subscribe(
      (response: Attendance)=>{
        console.log("Successful Update")
        this.attendance=response;
        console.log(response)
      }
      )
      },
      (error: HttpErrorResponse) => {alert(error.message)}
    );*/
  }
  public deny(deniedAttendance: Attendance): void{
    
    this.attendanceService.denyAttendance(deniedAttendance.id).subscribe(
      (response: void)=>
      {
        console.log("deny")
        this.getAllAttendance();
      }
    ),
    (error: HttpErrorResponse) => {alert(error.message)}
    /*this.attendanceService.getAttendanceByStudent(this.attendance.studentName || '').subscribe(
      (data:Attendance)=>{
        console.log(data)
        this.attendance.id = data.id;
       this. attendance.studentName = data.studentName;
        this.attendance.wasPresent = data.wasPresent;
        this.attendance.excuse = data.excuse;
        this.attendance.receipt = data.receipt;
        this.attendance.approved = false;
    this.attendanceService.updateAttendance(this.attendance, this.attendance.id).subscribe(
      (response: Attendance)=>{
        console.log("Successful Update")
        this.attendance=response;
        console.log(response)
      }
      )
      },
      (error: HttpErrorResponse) => {alert(error.message)}
    );*/
  }
  
  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInTeacher', '');
    this.router.navigate(['/teacher-login'])
  }

}
