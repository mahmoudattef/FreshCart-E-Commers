import { Component, inject, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  private readonly _AuthService =inject(AuthService)
  //this is service to navigate page to another page
  private readonly _Router=inject (Router)
  msgError:string="";
  msSuccess:boolean=false;
  isLoading:boolean=false;
  registerSub!:Subscription


  //Validators By Form Group
  private readonly _FormBuilder=inject(FormBuilder)

  registerForm:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required ,Validators.minLength(3),Validators.maxLength(20)]],
    email:[null,[Validators.required ,Validators.email]],
    password:[null,[Validators.required ,Validators.pattern(/^\w{6,}$/)]],
    rePassword:[null],
    phone:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
  },{ validators :this.confirmPassword})


registerSubmit():void{

  if(this.registerForm.valid){

  this.isLoading=true;

this.registerSub= this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
  next:(res)=>{
    console.log(res);
     //if all ok
     if(res.message=='success'){
      setTimeout(()=>{
        this.msSuccess=true;
        this._Router.navigate(['/login'])
      },1000);

     }


    this.isLoading=false;
  },
  error:(err:HttpErrorResponse)=>{
    this.msgError= err.error.message
    console.log(err);
    this.isLoading=false;
  }
})
  }else{
    this.registerForm.setErrors({mismatch:true})
    this.registerForm.markAllAsTouched()
  }

}
ngOnDestroy(): void {
  this.registerSub?.unsubscribe()
}

// rx validators is Easier to use
//custom validators
confirmPassword(g:AbstractControl)
{
if (g.get('password')?.value===g.get('rePassword')?.value){
  return null;
}else{
  return{mismatch:true}
}
}
}

