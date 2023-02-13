import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/facility/rent-type";
import {FacilityType} from "../../../model/facility/facility-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RentTypeService} from "../../service/rent_type/rent-type.service";
import {FacilityService} from "../../service/facility/facility.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FacilityTypeService} from "../../service/facility_type/facility-type.service";
import {Facility} from "../../../model/facility/facility";

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];
  formUpdaeFacility: FormGroup;

  constructor(private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        this.facilityService.findById(id).subscribe(data => {
          this.formUpdaeFacility.patchValue(data);
        })
      }
    });

    this.formUpdaeFacility = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required]),
      img: new FormControl(),
      area: new FormControl("", [Validators.required]),
      cost: new FormControl("", [Validators.required]),
      maxPeople: new FormControl("", [Validators.required]),
      rentType: new FormControl("", [Validators.required]),
      facilityType: new FormControl("", [Validators.required]),
      standardRoom: new FormControl("", [Validators.required]),
      descriptionOtherConvenience: new FormControl("", [Validators.required]),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType()
  }

  getAllFacilityType() {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypeList = next;
    })
  }

  getAllRentType() {
    this.rentTypeService.getAll().subscribe(next => {
      this.rentTypeList = next;
    })
  }

  compareWith(o1: Facility, o2: Facility) {
    return o1 && o2 ? o1.id = o2.id : o1 = o2;
  }

  updateFacility() {
    if (this.formUpdaeFacility.valid) {
      let facility: Facility = this.formUpdaeFacility.value;
      this.facilityService.update(facility.id, facility).subscribe(next => {
        console.log(next);
        this.router.navigateByUrl("/facility/list");
      });
    } else {
      alert("Chỉnh sửa không thành công");
      this.router.navigateByUrl("/facility/list");
    }

  }
}
