import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'importdata',component:ImportdataComponent},
  {path:'managecompany',component:ManagecompanyComponent},
  {path:'manageexchange',component:ManageexchangeComponent},
  {path:'createcompany',component:CreatecompanyComponent},
  {path:'userlanding',component:UserlandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
