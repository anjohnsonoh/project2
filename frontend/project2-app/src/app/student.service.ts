import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiServerUrl = environment.apiBaseUrl;

  public loggedInStudent: Student | undefined;

  constructor(private http: HttpClient) { }
  public getStudents(): Observable<Student[]>
  {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student`);
  }
  public getStudentByUsername(username: string)
  {
    return this.http.get<Student>(`${this.apiServerUrl}/student/byUsername/${username}`);
  }
  public getStudent(id: Number): Observable<Student>
  {
    return this.http.get<Student>(`${this.apiServerUrl}/student/${id}`)
  }
  public addStudent(student: Student): Observable<Student>
  {
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student)
  }
  public incrementAttendance(id: Number): Observable<Student>
  {
    return this.http.put<Student>(`${this.apiServerUrl}/student/increment/${id}`, 1)
  }

  public updateStudent(student: Student, id: Number)
  {
    return this.http.post<Student>(`${this.apiServerUrl}/student/${id}`, student)
  }

  public deleteStudent(id: number){
    return this.http.delete<void>(`${this.apiServerUrl}/student/delete/${id}`)
  }

  public updateStudent2(student: Student)
  {
    return this.http.post<Student>(`${this.apiServerUrl}/student/update`, student)
  }


}
