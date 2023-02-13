import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroup} from "@angular/forms";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";
import {FacilityTypeService} from "../../service/facility_type/facility-type.service";
import {RentTypeService} from "../../service/rent_type/rent-type.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility/facility.service";
import {Router} from "@angular/router";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  formCreateFacilyty: FormGroup;
  listFacilityType: FacilityType[] = [];
  listRentType: RentType[] = [];

  constructor(private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService: FacilityService,
              private router: Router) {
    this.formCreateFacilyty = new FormGroup({
      name: new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(50)]),
      img: new FormControl(),
      area: new FormControl("",[Validators.required,Validators.min(3),Validators.max(20)]),
      cost: new FormControl("",[Validators.required,Validators.min(10000000),Validators.max(100000000)]),
      maxPeople: new FormControl("",[Validators.required,Validators.min(1),Validators.max(10)]),
      rentType: new FormControl("",[Validators.required]),
      facilityType: new FormControl("",[Validators.required]),
      standardRoom: new FormControl("",[Validators.required]),
      descriptionOtherConvenience: new FormControl("",[Validators.required]),
      poolArea: new FormControl("",[Validators.min(2),Validators.max(15)]),
      numberOfFloors: new FormControl("",Validators.min(1)),
      facilityFree: new FormControl("")
    })
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getListRentType();
  }

  getAllFacilityType() {
    return this.facilityTypeService.getAll().subscribe(next => {
      this.listFacilityType = next;
    });
  }

  getListRentType() {
    return this.rentTypeService.getAll().subscribe(next => {
      this.listRentType = next;
    })
  }


  createFacility() {
    if(this.formCreateFacilyty.valid){
      let facility = this.formCreateFacilyty.value;
      this.facilityService.save(facility).subscribe(next => {
        this.formCreateFacilyty.reset();
        alert("Thêm mới thành công")
        this.router.navigateByUrl("/facility/list");
      })
    } else {
      alert("Thêm mới không thành công");
      this.router.navigateByUrl("/facility/list");

    }

  }
}
