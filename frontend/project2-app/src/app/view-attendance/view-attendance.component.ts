import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attendance } from '../attendance';
import { AttendanceService } from '../attendance.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {

  public listAttendance!: Attendance[];

  constructor(private attendanceService: AttendanceService,
    private router: Router) {
    console.log("Attendance Service called")
  }

  ngOnInit(): void {
    this.getAllAttendance();
  }

  public getAllAttendance(): void{
    this.attendanceService.getAttendance().subscribe(
      (response: Attendance[])=>{
        this.listAttendance = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInTeacher', '');
    this.router.navigate(['/teacher-login'])
  }

}
