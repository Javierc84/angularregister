import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RegisterModel } from "src/app/models/register.model";

import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted: boolean = false;
  noPassword: boolean = false;
  noConfirmPassword: boolean = false;
  noMatch: boolean = false;
  noEmail: boolean = false;

  constructor(private fb: FormBuilder, private route: Router, private registerService:RegisterService) {}

  ngOnInit():void {
    this.registerForm = this.fb.group(
      {
        email: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      }
    );
    this.registerForm
    return; 
  }

  onSubmit() {


    let registerModel: RegisterModel = new RegisterModel(this.registerForm.controls.email.value , this.registerForm.controls.password.value,this.registerForm.controls.confirmPassword.value, '');


    if(!this.registerForm.value.email || this.registerForm.value.email !== 'eve.holt@reqres.in'){
      this.noEmail = true;
    } else {
      this.noEmail = false;
    }
    if(!this.registerForm.value.password || !this.registerForm.value.confirmPassword){
      this.noPassword = true;
    } else {
      this.noPassword = false;
    }
    if(this.registerForm.value.confirmPassword){
      this.noConfirmPassword = true;
    } else {
      this.noConfirmPassword = false;
    }
    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.noMatch = true;
    } else {

      this.noMatch = false;
      this.registerService.
      perfomRegister(registerModel)
      .subscribe(respuesta1 => {
        console.log(JSON.stringify(respuesta1));
        this.route.navigate(['/home']);
      }); 
    } 


    
    
  }
  }

  //enviarDatosConsola(){ }

