import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract/contract";
import {ContractService} from "../../service/contract/contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[] = [];
  contractRemove: Contract = {};

  constructor(private contractService: ContractService) {
    this.getListContract();

  }

  ngOnInit(): void {
    this.getListContract();
  }

  getListContract() {
    return this.contractService.getAll().subscribe(next=>{
      this.contractList = next;
    })
  }


  removeContract() {
    if(this.contractRemove.id!=null){
      this.contractService.delete(this.contractRemove.id).subscribe(next=>{
        this.getListContract();
      });
    }

  }
}
