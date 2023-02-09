import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';



const routes: Routes = [
  {path:'', component: ProductListComponent},
  // {path:'product/list', component: ProductListComponent},
  {path:'product/create', component: ProductCreateComponent},
  {path:'product/detail/:id',component:ProductDetailComponent},
  {path:'product/update/:id',component:ProductUpdateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
