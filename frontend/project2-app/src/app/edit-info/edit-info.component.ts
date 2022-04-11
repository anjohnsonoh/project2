import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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

   }
   updateStudent(studentForm: NgForm): void {
    this.studentService.getStudentByUsername(localStorage.getItem('loggedInStudent') || '').subscribe(
      (data:Student)=>{
        console.log(data);
        studentForm.value.attendance = data.attendance;
        studentForm.value.teacher = data.teacher;
        this.studentService.updateStudent(studentForm.value, data.id).subscribe(
          (response:Student)=>{
            console.log("Successfully Updated");
            localStorage.setItem('loggedInStudent', response.username);
            this.student = response;
            console.log(response)
          }
        )
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    logout(): void{
      console.log("logout")
      localStorage.setItem('loggedInStudent', '');
      this.router.navigate(['/student-login'])
    }
 }