import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility");
  }

  save(facility:Facility){
    return this.httpClient.post("http://localhost:3000/facility",facility);
  }

  findById(id:number){
    return this.httpClient.get<Facility>("http://localhost:3000/facility/"+id);
  }

  update(id:number, facility:Facility){
    return this.httpClient.patch("http://localhost:3000/facility/"+id,facility);
  }

  delete(id:number){
    return this.httpClient.delete("http://localhost:3000/facility/"+id);
  }
}
