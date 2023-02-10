import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categoryList: Category[] = [];
  productUpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  })

  compareWith(o1: Product, o2: Product) {
    return o1 && o2 ? o1.id = o2.id : o1 = o2;
  }

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {
    this.activatedRoute.paramMap.subscribe(next => {
      let id = parseInt(next.get('id'));
      if (id != null) {
        productService.findById(id).subscribe(data => {
          this.productUpdateForm.patchValue(data);
        })
      }
    })

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    })
  }


  updateProduct() {
    let product: Product = this.productUpdateForm.value;
    this.productService.updatete(product.id,product).subscribe(data=>{
      alert('abc');
      this.router.navigateByUrl("")
    });
  }
}
