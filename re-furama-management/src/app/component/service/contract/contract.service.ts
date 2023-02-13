import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../../../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient:HttpClient) { }
  getAll(){
    return  this.httpClient.get<Contract[]>("http://localhost:3000/contract");
  }
  save(contract:Contract){
    return this.httpClient.post("http://localhost:3000/contract",contract);
  }
  delete(id:number){
    return this.httpClient.delete("http://localhost:3000/contract/"+id);
  }
}
