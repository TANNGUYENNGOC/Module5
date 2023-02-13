import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductCreateComponent} from "./product/product-create/product-create.component";


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'product/create',component: ProductCreateComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
