import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) { }



  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      this.categoryList = data;
    })
  }



  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigateByUrl('/product/list');

    });
  }

}
