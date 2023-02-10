import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];

  idProduct: number;
  nameProduct: string;
  p: number=0;

  constructor(private productService: ProductService, private router: Router) {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(next => {
      console.log(next);
      this.productList = next;
    }, error => {

    })
  }

  ngOnInit(): void {
  }


  remove(id: number, name: string) {
    this.idProduct = id;
    this.nameProduct = name;
  }

  removeProduct() {
    this.productService.delete(this.idProduct).subscribe(next => {
      alert("Xóa thành công")
      this.getAll()
    });
  }
}
