import { Component, OnInit } from '@angular/core';
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  contractList:Contract[] = [
    {
      id:1,
      startDate:"01-01-2023",
      endDate:"02-02-2023",
      deposit:2000,
      employee:{
        id:1,
        name:"Nhậm Ngã Hành"
      },
      customer:{
        id:2,
        name:"Khương Tử Nha"
      },
      facility:{
        id:3,
        name:"RoomOfTan"
      }

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
