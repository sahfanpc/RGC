import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDataComponent } from './add-data/add-data.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'user-register',component:UserRegisterComponent},
  {path:'',component:UserLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'add-data',component:AddDataComponent},
  {path:'update',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
