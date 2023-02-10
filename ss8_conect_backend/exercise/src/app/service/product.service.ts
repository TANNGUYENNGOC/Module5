import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }
  URLList = ("http://localhost:3000/product")

  getAll() {
    return this.httpClient.get<Product[]>(this.URLList);
  }

  save(product: Product):Observable<Product> {
    return this.httpClient.post(this.URLList,product);
  }

  findById(id:number){
    return this.httpClient.get<Product>(this.URLList +'/' + id);
  }

  updatete(id:number,product:Product){
  return this.httpClient.put(this.URLList +'/' +id, product)
  }

  delete(id:number){
    return this.httpClient.delete(this.URLList+'/'+ id);
  }
}
