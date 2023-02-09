import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract/contract";
import {ContractService} from "../contract.service";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[];

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.getListContract().subscribe(data => {
      this.contractList = data;
      console.log(this.contractList);
    })
  }

}
