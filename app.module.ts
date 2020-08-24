import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {UserService } from './service/user.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompanyComponent } from './managecompany/managecompany.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { UserlandingComponent } from './userlanding/userlanding.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminlandingComponent,
    ImportdataComponent,
    ManagecompanyComponent,
    ManageexchangeComponent,
    CreatecompanyComponent,
    UserlandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     RouterModule,
     ReactiveFormsModule,
    
     HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
