import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  studentList:Student[]=[];
  studentRemove: Student = {};
  constructor(private studentService:StudentService) {
    this.getListStudent();
  }

  ngOnInit(): void {
  }

  getListStudent(){
    return this.studentService.getAll().subscribe(next=>{
      this.studentList = next;
    })
  }

  remove() {

    this.studentService.delete(this.studentRemove.id).subscribe(next=>{
     alert("Xóa thành công");
     this.getListStudent();
    })
  }


}
