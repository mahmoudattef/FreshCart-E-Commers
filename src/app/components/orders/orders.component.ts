import { Subscription } from 'rxjs';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../core/services/orders.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit ,OnDestroy {
  private readonly _ActivatedRoute=inject(ActivatedRoute)
  private readonly _OrdersService=inject(OrdersService)
  private readonly _Router=inject(Router)
  private readonly _CartService=inject(CartService)

  isLoadingCash:boolean=false;
  isLoading:boolean=false;
  orderSubmitUnSub !:Subscription
  cashPayUnSub !:Subscription

    orders:FormGroup =new FormGroup({
      details:new FormControl(null,Validators.required),
      phone:new FormControl(null,Validators.required ),
      city:new FormControl(null,Validators.required),
    })

    cartId:string | null="";
    ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(parms)=>{
          this.cartId=parms.get('id')
        }
      })
    }

    orderSubmit():void{

      this.isLoading=true;
     this.orderSubmitUnSub= this._OrdersService.checkOut(this.cartId , this.orders.value).subscribe({
        next:(res)=>{
          this.isLoading=false;
          if(res.status === 'success'){
            window.open(res.session.url)
          }
        },
        error:(err)=>{
          console.log(err);
          this.isLoading=false;
        }
      })
    }

    ngOnDestroy():void {
      this.orderSubmitUnSub?.unsubscribe()
      this.cashPayUnSub?.unsubscribe()
    }

    cashPay():void{
      this.isLoadingCash=true;
     this.cashPayUnSub= this._OrdersService.cashOrders(this.cartId , this.orders.value).subscribe({
        next:(res)=>{
          this.isLoadingCash=false;
            this._Router.navigate(['/allorders'])
            this._CartService.cartNumber.set(0)


        },
        error:(err)=>{
          this.isLoadingCash=false;
          console.log(err);

        }
      })
    }
}
