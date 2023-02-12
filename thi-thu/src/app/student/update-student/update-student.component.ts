import {Component, OnInit} from '@angular/core';
import {ClazzService} from "../../clazz/clazz/clazz.service";
import {Clazz} from "../../model/clazz";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../model/student";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  clazzList: Clazz[] = [];
  formUpdateStudent: FormGroup;

  constructor(private clazzService: ClazzService,
              private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.studentService.findById(id).subscribe(data => {
          this.formUpdateStudent.patchValue(data);
        })
      }
    });

    this.formUpdateStudent = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      clazz: new FormControl(),
    })

    this.getListClazz();
  }

  ngOnInit(): void {
  }

  getListClazz() {
    this.clazzService.getAll().subscribe(next => {
      this.clazzList = next;
    })
  }

  compareWith(o1: Student, o2: Student) {
    return o1 && o2 ? o1.id = o2.id : o1 = o2;
  }

  updateStudent() {
    let student: Student = this.formUpdateStudent.value;
    this.studentService.update(student.id, student).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl("");
    })
  }
}
