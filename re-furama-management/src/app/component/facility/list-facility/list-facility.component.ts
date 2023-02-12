import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";


@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  constructor() {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
  }

}
