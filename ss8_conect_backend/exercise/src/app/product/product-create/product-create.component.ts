import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categoryList: Category [] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService:CategoryService
) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    })

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next=>{
      this.categoryList = next;
    })
  }


  createProduct() {
    let product = this.productForm.value;
    this.productService.save(product).subscribe(netx=>{
      this.productForm.reset();
    });
  }
}
