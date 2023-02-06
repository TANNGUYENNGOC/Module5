import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./component/navigation/navigation.component";
import {FooterComponent} from "./component/footer/footer.component";
import {HeaderComponent} from "./component/header/header.component";
import {HomeComponent} from "./component/home/home.component";
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { UpdateFacilityComponent } from './component/facility/update-facility/update-facility.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CreateContractComponent,
    ListContractComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
    CreateFacilityComponent,
    ListFacilityComponent,
    UpdateFacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
