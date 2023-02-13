import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  public compareWith(object1: Category, object2: Category)  {
    return object1 && object2 ? object1.id===object2.id : object1===object2;
  }

  category: Category[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get("id");
      if (id!= null){
        this.getProduct(id);
      }
    })

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      this.category = data;
    })
  }

  getProduct(id: any) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm.patchValue(product)
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.productForm.controls.id.value,product).subscribe(data=>{
      this.router.navigateByUrl('product/list');
      alert('Cập nhật thành công');
    });
  }


}
