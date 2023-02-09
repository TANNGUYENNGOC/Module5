import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  url = "http://localhost:3000/contract"

  constructor(private httpClient: HttpClient) {
  }

  getListContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.url);
  }
}
