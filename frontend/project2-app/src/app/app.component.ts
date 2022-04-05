import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2-app';
  constructor(private studentService: StudentService){

   }

  ngOnInit(): void {
  }


}
