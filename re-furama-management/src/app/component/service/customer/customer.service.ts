import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }

  save(customer: Customer) {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }

  findById(id: number) {
    return this.httpClient.get<Customer>("http://localhost:3000/customer/" + id);
  }

  update(id: number, customer: Customer) {
    return this.httpClient.patch("http://localhost:3000/customer/" + id, customer);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/customer/"+id);
  }

}
