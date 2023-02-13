import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../service/customer/customer.service";
import {CustomerTypeService} from "../../service/customer_type/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer [] = [];
  customerRemove: Customer = {};
  listCustomerType: CustomerType [] = [];

  constructor(private customerService:CustomerService,
              private customerTypeService:CustomerTypeService) {

  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getListCustomerType();
  }

  getAllCustomer() {
    return this.customerService.getAll().subscribe(next=>{
      this.customerList = next;
    },error => {

    })
  }

  removeCustomer() {
    this.customerService.delete(this.customerRemove.id).subscribe(next=>{
      this.getAllCustomer();
    })
  }

  getListCustomerType(){
    this.customerTypeService.getAll().subscribe(next=>{
      this.listCustomerType = next;
    })
  }

  search(name: string, email: string, customerType: string) {
    this.customerService.searchCustomer(name,email,customerType).subscribe(next=>{
      this.customerList = next;
      console.log(customerType);
    },error => {

    })
  }
}
