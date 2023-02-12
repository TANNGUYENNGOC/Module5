import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../service/customer/customer.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer [] = [];

  constructor(private customerService:CustomerService) {

  }

  ngOnInit(): void {
    this.getAllCustomer();
  }

  getAllCustomer() {
    return this.customerService.getAll().subscribe(next=>{
      this.customerList = next;
    },error => {

    })
  }
}
