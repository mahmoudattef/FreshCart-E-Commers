import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OrdersService } from '../../core/services/orders.service';
import { jwtDecode } from 'jwt-decode';

import { CurrencyPipe } from '@angular/common';
import { IallOrders } from '../../core/interfaces/iorders';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss'
})
export class AllordersComponent implements OnInit ,OnDestroy{

  private readonly _OrdersService= inject(OrdersService)
  Product:IallOrders []=[]
  userData:any= null;
  allOrdersUnSub !:Subscription



  ngOnInit(): void {
    this.userData=  jwtDecode(localStorage.getItem('userToken') !)
   this.allOrdersUnSub= this._OrdersService.getUserOrders(this.userData.id).subscribe({
      next: (res) => {
        this.Product=res;

      },
      error: (err) => {
        console.log('err:',err);
      }
    })
  }
  ngOnDestroy():void {
    this.allOrdersUnSub?.unsubscribe()
  }


}
