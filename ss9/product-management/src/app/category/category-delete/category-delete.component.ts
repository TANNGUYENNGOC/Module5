import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });


  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id!= null){
        this.getCategory(id);
      }
    });
  }

  ngOnInit() {
  }

  getCategory(id: any) {
    return this.categoryService.findById(id).subscribe(category => {
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name),
      });
    });
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.categoryForm.controls.id.value).subscribe(() => {
      this.router.navigateByUrl('category/list');
      alert('Xoa thành công');

    }, e => {

    });
  }
}
