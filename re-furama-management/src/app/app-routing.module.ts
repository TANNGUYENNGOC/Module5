import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {HomeComponent} from "./component/home/home.component";
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";
import {CreateFacilityComponent} from "./component/facility/create-facility/create-facility.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";


const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: "customer/list", component: ListCustomerComponent},
  {path: "customer/create", component: CreateCustomerComponent},
  {path: "customer/update/:id",component:UpdateCustomerComponent},

  {path: "contract/list", component: ListContractComponent},
  {path: "facility/list", component:ListFacilityComponent},
  {path: "facility/create", component: CreateFacilityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
