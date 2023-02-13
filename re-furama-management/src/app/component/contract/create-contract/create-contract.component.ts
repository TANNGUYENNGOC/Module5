import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../service/employee/employee.service";
import {Employee} from "../../../model/employee/employee";
import {CustomerService} from "../../service/customer/customer.service";
import {Customer} from "../../../model/customer/customer";
import {Facility} from "../../../model/facility/facility";
import {FacilityService} from "../../service/facility/facility.service";
import {ContractService} from "../../service/contract/contract.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  formCreateContract: FormGroup
  listEmployee: Employee[] = [];
  listCustomer: Customer[] = [];
  lisyFacility: Facility [] = [];

  constructor(private employeeService: EmployeeService,
              private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService:ContractService,
              private router:Router) {
    this.formCreateContract = new FormGroup({
      id: new FormControl(),
      startDate: new FormControl("",[Validators.required]),
      endDate: new FormControl("",[Validators.required]),
      deposit: new FormControl("",[Validators.required,Validators.min(0), Validators.max(100000000)]),
      employee: new FormControl("",[Validators.required]),
      customer: new FormControl("",[Validators.required]),
      facility: new FormControl("",[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getListEmployee();
    this.getListCustomer();
    this.getListFacility();
  }

  getListEmployee() {
    this.employeeService.getAll().subscribe(next => {
      this.listEmployee = next;
    })
  }

  getListCustomer() {
    this.customerService.getAll().subscribe(next => {
      this.listCustomer = next;
    });
  }

  getListFacility() {
    this.facilityService.getAll().subscribe(next => {
      this.lisyFacility = next;
    })
  }

  createContract() {
    if(this.formCreateContract.valid){
      let contract = this.formCreateContract.value;
      this.contractService.save(contract).subscribe(next=>{
      });
      this.formCreateContract.reset();
      this.router.navigateByUrl("/contract/list")
    } else {
      alert("Thêm mới không thành công");
      this.router.navigateByUrl("/contract/list");
    }

  }
}
