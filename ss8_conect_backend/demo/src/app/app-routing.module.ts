import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from "./component/student-list/student-list.component";
import {StudentCreateComponent} from "./component/student-create/student-create.component";
import {StudentInfoComponent} from "./component/student-info/student-info.component";

const routes: Routes = [
  {path: "", component: StudentListComponent},
  {path: "create", component: StudentCreateComponent},
  {path: "info/:id", component: StudentInfoComponent},
  // {path: "*", component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
