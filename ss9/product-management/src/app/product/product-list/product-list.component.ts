import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {};
  p= 1;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.getAll().subscribe(product => {
      this.products = product;
    });
  }

  deleteProduct() {
    if (this.temp.id != null) {
      this.productService.deleteProduct(this.temp.id).subscribe(data => {
          this.getAll()
        alert("Xoa thanh cong")
      }, error => {

      },()=>{
      })
    }
  }
}
