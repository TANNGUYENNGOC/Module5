import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  reactiveForm: FormGroup;
  counttryList: string [] = ["Việt Nam", "USA","English"];
  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[this.validateConfirmPassWord,Validators.required]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern("0[0-9]{9}")])
    })
  }

  ngOnInit(): void {
  }

  create() {
    console.log(this.reactiveForm);
  }

  validateConfirmPassWord(control:AbstractControl){
    let check = control.value;
    if (check.password === check.confirmPassword){
      return {"123azasd":true}
    }
    return null;
  }
}
