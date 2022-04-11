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
      excuse: "",
      receipt: 0,
      approved: false
    }
   }


  public getUnapproved(): Observable<Attendance[]>
  {
    return this.http.get<Attendance[]>(`${this.apiServerUrl}/attendance/unapproved`)
  }
  public addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/add`, attendance)
  }

  public getAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiServerUrl}/attendance`);
  }

  public getAttendanceByStudent(id: number):  Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiServerUrl}/attendance/byStudent/${id}`);
  }

  public updateAttendance(attendance: Attendance, id: number) {
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/update/${id}`, attendance)

  }
  public approveAttendance(attendance: Attendance, id: number)
  {
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/${id}`, attendance);
  }
  public denyAttendance(id: number)
  {
    return this.http.delete<void>(`${this.apiServerUrl}/attendance/${id}`)
  }
/*   public approveAttendance(attendance: Attendance): Observable<Attendance>{
    this.attendance.approved=true
    return this.http.post<Attendance>(`${this.apiServerUrl}/attendance/${approved}`, attendance)
  } */
}
