import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  
  private apiServerUrl = environment.apiBaseUrl;
  private attendance: Attendance;

  constructor(private http: HttpClient) {
    this.attendance={
      id: 0,
      studentName: "",
      wasPresent: true,
      absent: false,
      excuse: "",
      receipt: 0,
      approved: false
    }
   }



  public addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/add`, attendance)
  }

  public getAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiServerUrl}/attendance`);
  }

  public getAttendanceByStudent(student: String):  Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiServerUrl}/attendance/${student}`)
  }

  public updateAttendance(attendance: Attendance, wasAbsent: boolean) {
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/${wasAbsent}`, attendance)

  }

/*   public approveAttendance(attendance: Attendance): Observable<Attendance>{
    this.attendance.approved=true
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/${approved}`, attendance)
  } */
}
