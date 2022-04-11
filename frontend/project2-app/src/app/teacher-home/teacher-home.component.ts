import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {

  public students!: Student[];
  public loggedInUser: Student | undefined;
  public editStudent!: Student;
  public deleteStudent!: Student;
  public teacher!: Teacher;

  constructor(private studentService: StudentService,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router){
    console.log("Called")
   }
  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void{
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onAddStudent (addForm: NgForm): void {
    // document.getElementById('add-student-form').click();
    this.studentService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateStudent (student: Student): void {
    this.studentService.updateStudent2(student).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent (id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudents(key: string): void {
    console.log(key);
    const results: Student[] = [];
    for (const student of this.students) {
      if (student.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || student.username.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(student);
      }
    }
    this.students = results;
    if (results.length === 0 || !key) {
      this.getStudents();
    }
  }

  public onOpenModal(student: Student, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
    if (mode === 'edit') {
      this.editStudent = student;
      button.setAttribute('data-target', '#updateStudentModal');
    }
    if (mode === 'delete') {
      this.deleteStudent = student;
      button.setAttribute('data-target', '#deleteStudentModal');
    }
    container!.appendChild(button);
    button.click();
  }

  public updateTeacher(): void {
    this.teacherService.getTeacheByusername(localStorage.getItem('loggedInTeacher') || '').subscribe(
     (data:Teacher)=>{
       this.teacher = data as Teacher;
       console.log(data);
     }),
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
  }

  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInTeacher', '');
    this.router.navigate(['/teacher-login'])
  }
}


function data(data: any, Teacher: any) {
  throw new Error('Function not implemented.');
}

