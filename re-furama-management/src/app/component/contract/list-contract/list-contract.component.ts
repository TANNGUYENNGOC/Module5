import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList: Contract[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
