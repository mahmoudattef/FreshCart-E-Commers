import { Router, RouterLink } from '@angular/router';
import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { error } from 'console';
import { NgClass } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ,NgClass,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
 private readonly  _AuthService=inject (AuthService)
  private readonly _FormBuilder=inject (FormBuilder)
  private readonly _Router=inject(Router)
  msSuccess:boolean=false;
  isLoading:boolean=false;
  msgError:string="";
  loginSub!:Subscription

loginForm:FormGroup =this._FormBuilder.group({
  email:[null,[Validators.required ,Validators.email]],
  password:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
})

loginSubmit():void{

  if(this.loginForm.valid){

    this.isLoading=true;
    console.log(this.loginForm.value)

   this.loginSub= this._AuthService.setLoginForm(this.loginForm.value).subscribe({
      next: (res) => {
        if(res.message=='success'){
          this.msSuccess=true;
          setTimeout(() => {
            //1-save token
            localStorage.setItem('userToken',res.token)
             //2-decode token in ts auth-service and call tokenFunction  her
             this._AuthService.saveUserData()

             //3-navigate to home
            this._Router.navigate(['/home'])
          }, 1000);
        }
      },
      error:(err:HttpErrorResponse)=>{
        this.msgError= err.error.message
        console.log(err);
        this.isLoading=false;
      }
    })
  }else{
    this.loginForm.markAllAsTouched()
  }
}
ngOnDestroy(): void {
  this.loginSub?.unsubscribe();
}

}


