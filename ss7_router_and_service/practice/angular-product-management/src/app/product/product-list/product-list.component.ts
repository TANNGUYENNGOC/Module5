import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];
  idProduct:number;
  nameProduct:string;

  constructor(private productService:ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.products = this.productService.getAll();
  }

  remove(name: string, id: number) {
    this.idProduct = id;
    this.nameProduct = name;
  }

  removeProduct() {
    this.productService.remove(this.idProduct)
    this.router.navigateByUrl('/')
  }

}
