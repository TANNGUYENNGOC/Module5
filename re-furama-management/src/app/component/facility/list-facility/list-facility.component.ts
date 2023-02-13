import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {FacilityService} from "../../service/facility/facility.service";


@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  facilityRemove: Facility;
  constructor(private facilityService:FacilityService) {
    this.getAllFacility();
  }

  ngOnInit(): void {
  }

  getAllFacility(){
    return this.facilityService.getAll().subscribe(next=>{
      this.facilityList = next
    })
  }

  removeFacility() {
    this.facilityService.delete(this.facilityRemove.id).subscribe(next=>{
      this.getAllFacility();
    });
  }


}
