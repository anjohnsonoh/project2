import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiServerUrl}/teacher`);
  }

  public getTeacher(id: Number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiServerUrl}/${id}`)
  }

  public addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(`${this.apiServerUrl}/add`, teacher)
  }

  public updateteacher(teacher: Teacher, id: Number) {
    return this.http.post<Teacher>(`${this.apiServerUrl}/${id}`, teacher)
  }
}