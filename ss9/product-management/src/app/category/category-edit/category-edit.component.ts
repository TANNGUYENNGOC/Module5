import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from "../../model/category";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

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

  supmit() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(this.categoryForm.controls.id.value, category).subscribe(data =>{
      this.router.navigateByUrl('category/list');
      alert('Cập nhật thành công');
    });
  }
}
