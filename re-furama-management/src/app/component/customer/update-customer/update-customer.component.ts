import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../../model/customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer_type/customer-type.service";
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerTypeList: CustomerType[] = [];
  formUpdateCustomer: FormGroup;
  listCustomer: Customer[] = [];

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.customerService.findById(id).subscribe(data => {
          this.formUpdateCustomer.patchValue(data);
        })
      }
    });

    this.formUpdateCustomer = new FormGroup({
      id: new FormControl("", [Validators.required]),
      customerType: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl(),
      idCard: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required])
    });

    this.getListCustomerType();
  }

  ngOnInit(): void {
  }

  getListCustomerType() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypeList = next;
    })
  }

  compareWith(o1: Customer, o2: Customer) {
    return o1 && o2 ? o1.id = o2.id : o1 = o2;
  }

  updateCustomer() {
    if (this.formUpdateCustomer.valid) {
      let customer: Customer = this.formUpdateCustomer.value;
      this.customerService.update(customer.id, customer).subscribe(next => {
        console.log(next);
        this.router.navigateByUrl("customer/list");
      });
    } else {
      alert("Chỉnh sửa không thành công"),
        this.router.navigateByUrl("/customer/list");
    }
  }
}
