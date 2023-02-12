import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerTypeService} from "../../service/customer_type/customer-type.service";
import {CustomerService} from "../../service/customer/customer.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  createFormCustomer: FormGroup;
  customerTypeList: CustomerType[] = [];

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private router: Router) {
    this.createFormCustomer = new FormGroup({
      customerType: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      idCard: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    }, error => {

    })
  }

  createCustomer() {
    let customer = this.createFormCustomer.value;
    this.customerService.save(customer).subscribe(next => {
    });
    this.createFormCustomer.reset();
    this.router.navigateByUrl("/customer/list");
  }
}
