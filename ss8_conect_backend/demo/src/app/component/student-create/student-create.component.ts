import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from "../../model/student";
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";
import {Classroom} from "../../model/classroom";
import {ClassroomService} from "../../service/classroom.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  student: Student = {name: "", point: 0}
  @Output() studentSubmit = new EventEmitter();
  classrooms: Classroom[] = [];

  reactiveForm: FormGroup;

  constructor(private studentService: StudentService,
              private router: Router,
              private classroomService: ClassroomService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl("", [Validators.required, Validators.min(0)]),
      name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      dateOfBirth: new FormControl(""),
      point: new FormControl("", [this.validatePoint, Validators.min(-1)]),
      classroom: new FormControl()
    })
    this.classroomService.getAll().subscribe(next => {
      console.log(next)
      this.classrooms = next;
    });
  }

  ngOnInit(): void {
  }

  validatePoint(control: AbstractControl) {
    let point = control.value;
    if (point < 0) {
      return {"invalidPoint": true}
    }
    return null;
  }

  // createStudent() {
  //   this.studentSubmit.emit(this.student);
  //   this.student = {name: "", point: 0};
  // }

  // createStudentWithTemplate(templateForm: NgForm) {
  //   console.log(templateForm)
  //   if (templateForm.valid) {
  //     this.studentSubmit.emit(templateForm.value);
  //   }

  // }

  createStudentWithReactive() {
    console.log(this.reactiveForm);
    if (this.reactiveForm.valid) {
      this.reactiveForm.value.id = parseInt(this.reactiveForm.value.id);
      let temp = this.studentService.addStudent(this.reactiveForm.value).subscribe( next => {
        alert("Thêm mới thành công")
        // this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigateByUrl("")
      }, error => {
      }, () => {
      });
    }

  }
}
