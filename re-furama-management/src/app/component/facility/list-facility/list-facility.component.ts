import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    },
    {
      id:1,
      name:"Nguyễn Ngọc Tấn",
      area: 10,
      cost: 23,
      maxPeople:10,
      rentType:{
        id:1,
        name: "Ngày"
      },
      facilityType:{
        id:1,
        name: "House"
      },
      standardRoom:"zxc123a",
      descriptionOtherConvenience:"xcvbfđ",
      poolArea: 3,
      numberOfFloors:12,
      facilityFree:"không"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
