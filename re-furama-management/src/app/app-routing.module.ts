import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {HomeComponent} from "./component/home/home.component";
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";
import {CreateFacilityComponent} from "./component/facility/create-facility/create-facility.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";
import {UpdateFacilityComponent} from "./component/facility/update-facility/update-facility.component";
import {CreateContractComponent} from "./component/contract/create-contract/create-contract.component";


const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: "customer/list", component: ListCustomerComponent},
  {path: "customer/create", component: CreateCustomerComponent},
  {path: "customer/update/:id", component: UpdateCustomerComponent},

  {path: "facility/list", component: ListFacilityComponent},
  {path: "facility/create", component: CreateFacilityComponent},
  {path: "facility/update/:id", component: UpdateFacilityComponent},

  {path: "contract/list", component: ListContractComponent},
  {path: "contract/create", component: CreateContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
