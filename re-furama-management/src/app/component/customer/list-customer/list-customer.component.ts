import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList:Customer [] = [
    {
      id:1,
      customerType:{
        id:1,
        name:"vip"
      },
      name:"tan123azasd",
      dateOfBirth:"22-02-2000",
      gender:true,
      idCard:"123456789",
      phoneNumber:"00099944332",
      email:"tan@gmail.com",
      address:"Quảng ngãi"
    },
    {
      id:1,
      customerType:{
        id:1,
        name:"vip"
      },
      name:"tan123azasd",
      dateOfBirth:"22-02-2000",
      gender:false,
      idCard:"123456789",
      phoneNumber:"00099944332",
      email:"tan@gmail.com",
      address:"Quảng ngãi"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
