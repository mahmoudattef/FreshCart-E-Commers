import { Product } from './../../core/interfaces/iorders';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { ICart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit ,OnDestroy{
  private readonly _CartService =inject(CartService)
  private readonly _ToastrService =inject(ToastrService)
  numItem!:number
  getAllCart !:Subscription
  removeItemUnsub !:Subscription
  updateCountUnsub !:Subscription
  clearItemUnsub !:Subscription
  cartDetails:ICart ={} as ICart
    ///----------------------------------------------------On Open
  ngOnInit(): void {
    this.getAllCart = this._CartService.getProductsCard().subscribe({
      next:(res)=>{
        this.cartDetails= res.data
        this.numItem=res.data.products.length
      },
      error:(err)=>{
        console.log(err)

      }

    })
  }

  ngOnDestroy(): void {
    this.getAllCart?.unsubscribe()
    this.removeItemUnsub?.unsubscribe()
    this.updateCountUnsub?.unsubscribe()
    this.clearItemUnsub?.unsubscribe()

  }
    ///----------------------------------------------------Remove Item
  removeItem(id:string):void{
  this.removeItemUnsub= this._CartService.deleteSpecificCardITem(id).subscribe({
      next:(res)=>{
        this.cartDetails =res.data
        this._CartService.cartNumber.set(res.numOfCartItems)
        this._ToastrService.success(res.status ,'Fresh Card  : Remove Item')
      }
      ,
      error:(err)=>{
        console.log(err)
      }
    })
  }

      ///----------------------------------------------------Update
  updateCount(id:string ,count:number):void{
    if(count>0){
     this.updateCountUnsub= this._CartService.updateProductQuantity(id,count).subscribe({
        next:(res)=>{
          this.cartDetails=res.data
          this._ToastrService.success(res.status ,'Fresh Card is update')
        },
        error:(err)=>{
          console.log(err)
        }
      })
    }
  }

    ///----------------------------------------------------Clear All
  clearItem():void{
    this.clearItemUnsub= this._CartService.clearCart().subscribe({
      next:(res)=>{

        if(res.message =='success'){
          this.cartDetails ={} as ICart;
          this._ToastrService.success(res.status ,'Fresh Card is clear')
          this._CartService.cartNumber.set(0)
          this.numItem=0
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }


  ///------------------------------------------------------------- SweetAlert Library
  confirmBox(id:string){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.removeItem(id)

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  clearBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.clearItem()

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
