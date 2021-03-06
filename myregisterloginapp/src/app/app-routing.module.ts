import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    
      path:'login',
      component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
  ,
  {
    
      path:'register',
      component:RegisterComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule,
ReactiveFormsModule,
CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
