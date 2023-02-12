import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClazzService} from "../../clazz/clazz/clazz.service";
import {Clazz} from "../../model/clazz";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  formCreateStudent: FormGroup;
  clazzList: Clazz [] = [];

  constructor(private clazzService: ClazzService,
              private studentService: StudentService,
              private router: Router) {
    this.formCreateStudent = new FormGroup({
      id: new FormControl(),
      name: new FormControl("",[Validators.required]),
      clazz: new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
    this.getAllListClazz();
  }

  getAllListClazz() {
    return this.clazzService.getAll().subscribe(next => {
      this.clazzList = next;
    }, error => {

    })
  }

  createStudent() {
    let student = this.formCreateStudent.value;
    this.studentService.save(student).subscribe(next=>{
    });
    this.formCreateStudent.reset();
    this.router.navigateByUrl("");
  }
}
