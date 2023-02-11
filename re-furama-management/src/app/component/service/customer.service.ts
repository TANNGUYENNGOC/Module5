import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient:HttpClient) {
  }

  URL = "http://localhost:3000/customer";

  getAll() {
    return this.httpClient.get<Customer[]>(this.URL);
  }
}
