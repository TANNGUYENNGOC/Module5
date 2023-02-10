import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../../model/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit, OnChanges {

  // student: Student = {id: 5, name: "HaiTT", color: "#29e624"};

  // changeColorOfStudent(target: any) {
  //   this.student.color = target.value;
  // }
  //
  // changeNameOfStudent(target: any) {
  //   this.student.name = target.value;
  // }

 student: Student = {name: "haiTT", point: 9};

  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentService) {
    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get("id");
        if (id != null) {
         studentService.findById(parseInt(id)).subscribe(next => {
           console.log(next) ;
           this.student = next;
          });
          console.log(this.student)
        }

      },
      error => {

      }, () => {

      })
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.ngOnInit();
  }
}
