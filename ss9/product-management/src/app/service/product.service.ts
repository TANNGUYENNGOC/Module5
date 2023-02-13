import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {element} from "protractor";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3000/products`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product);
  }

  findById(id: any): Observable<Product> {
    return this.http.get<Product>(this.API_URL + `/` + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.API_URL + `/` + id, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(this.API_URL + `/` + id);
  }
}
