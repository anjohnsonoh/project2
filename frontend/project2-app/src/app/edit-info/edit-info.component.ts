import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  public student: Student;
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {
      this.student={
        id:0,
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        attendance:0,
        teacher:""
      }
    }
   ngOnInit(): void{
     this.updateStudent();

   }
   updateStudent(): void {
    this.studentService.getStudentByUsername(localStorage.getItem('loggedInStudent') || '').subscribe(
      (data:Student)=>{
        this.student = data as Student;
        console.log(data);
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
 }