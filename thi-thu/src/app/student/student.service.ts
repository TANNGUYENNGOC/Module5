import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {

  }

  getAll() {
    return this.httpClient.get<Student[]>("http://localhost:3000/student");
  }

  save(student: Student) {
    return this.httpClient.post("http://localhost:3000/student", student);
  }

  findById(id: number) {
    return this.httpClient.get<Student>("http://localhost:3000/student" + "/" + id);
  }

  update(id: number, student: Student) {
    return this.httpClient.patch("http://localhost:3000/student/" + id, student);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/student"+"/"+id);
  }
}
