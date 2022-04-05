import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Attendance } from './attendance';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(`${this.apiServerUrl}/add`, attendance)
  }

  public getAttendance(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiServerUrl}/attendance`);
  }

  public getAttendanceByStudent(student: String):  Observable<Attendance> {
    return this.http.get<Attendance>(`${this.apiServerUrl}/${student}`)
  }

  public updateAttendance(attendance: Attendance, wasAbsent: boolean) {
    return this.http.post<Attendance>(`${this.apiServerUrl}/${wasAbsent}`, attendance)

  }
}
