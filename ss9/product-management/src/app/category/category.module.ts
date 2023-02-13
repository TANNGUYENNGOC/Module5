import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryCreateComponent} from "./category-create/category-create.component";


@NgModule({
  declarations: [
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryListComponent,
    CategoryCreateComponent
  ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        ReactiveFormsModule
    ]
})
export class CategoryModule { }
