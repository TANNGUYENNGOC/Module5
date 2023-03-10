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
      name: new FormControl("", [Validators.required,Validators.pattern("^[A-Za-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ\\\\s\\\\d]{5,50}$")]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl(""),
      idCard: new FormControl("", [Validators.required,Validators.pattern("[0-9]{10}")]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern("[0][0-9]{9}")]),
      email: new FormControl("", [Validators.required,Validators.email]),
      address: new FormControl("", [Validators.required,Validators.minLength(5), Validators.maxLength(100)])
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
    if (this.createFormCustomer.valid){
      let customer = this.createFormCustomer.value;
      this.customerService.save(customer).subscribe(next => {
      });
      this.createFormCustomer.reset();
      this.router.navigateByUrl("/customer/list");
    } else {
      alert("Thêm mới không thành công"),
      this.router.navigateByUrl("/customer/list");
    }
  }
}
