import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = {};

  constructor(private activatedRoute:ActivatedRoute,private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get("id");
      if (id != null){
        this.product = productService.findById(parseInt(id));
        console.log(this.product)
      }
    })
  }

  ngOnInit(): void {
  }

}
