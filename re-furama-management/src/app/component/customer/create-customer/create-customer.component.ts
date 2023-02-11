import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createFormCustomer:FormGroup;
  constructor() {
    this.createFormCustomer = new FormGroup({
      customerType: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      dateOfBirth: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      idCard: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
  }

}
