import { Injectable } from '@angular/core';
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentList: Student[] = [
    {id: 1, name: "HaiTT", dateOfBirth: "1998/01/01", point: -1},
    {id: 2, name: "TrungDP", dateOfBirth: "1985/01/01", point: 10},
    {id: 3, name: "TrungDC", dateOfBirth: "1993/01/01", point: 4},
  ];
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("http://localhost:3000/students");
  }

  addStudent(event: any) {
   return this.httpClient.post("http://localhost:3000/students", event);
  }

  findById(id: number) {
  return this.httpClient.get<Student>("http://localhost:3000/students/"+ id);
  }

  searchName(value: string) {
    return this.httpClient.get<Student[]>("http://localhost:3000/students?name_like="+value);
  }
}
