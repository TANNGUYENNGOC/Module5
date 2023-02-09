import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productUpdateForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      let product = this.getProduct(this.id);
      this.productUpdateForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct() {
    let product: Product = this.productUpdateForm.value;
    this.productService.update(product.id, product);
  }


}
