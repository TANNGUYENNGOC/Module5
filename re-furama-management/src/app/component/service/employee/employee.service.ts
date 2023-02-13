import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../../../model/employee/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Employee[]>("http://localhost:3000/employee");
  }
}
