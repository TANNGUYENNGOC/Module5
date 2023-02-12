import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClazzComponent } from './clazz/clazz/clazz.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateStudentComponent } from './student/create-student/create-student.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UpdateStudentComponent } from './student/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ClazzComponent,
    ListStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
