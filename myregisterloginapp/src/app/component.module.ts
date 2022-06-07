import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
  
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    //Los módulos que necesitamos usar con la aplicación
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class ComponentsModule { }