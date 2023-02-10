import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  student: Student  = {name:"haiTT", point: 9};

  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getAll().subscribe(next =>{
      console.log(next);
      this.studentList = next;
    }, error => {

    }, () => {

    });
  }

  ngOnInit(): void {
  }

  // infomation(temp: Student) {
  //   this.student = temp;
  // }

  // createStudent(event: any) {
  //   this.studentService.addStudent(event);
  // }

  changePageToCreate() {

    this.router.navigateByUrl("/create");
  }

  changePageToInfo(id: number) {
    this.router.navigate(["/info", id]);
  }

  searchName(value: string) {
    this.studentService.searchName(value).subscribe(next => {
      this.studentList = next;
    });
  }
}
