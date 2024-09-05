import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { WishlistService } from '../../core/services/wishlist.service';
import { ICart } from '../../core/interfaces/icart';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit, OnDestroy{
  private readonly _WishlistService =inject(WishlistService)
  private readonly _CartService =inject(CartService)
  private readonly _ToastrService =inject(ToastrService)
    productsList:IProduct[] | null=null
    getAllWishList !:Subscription
    removeAllWishList !:Subscription
    addToCartWishList !:Subscription

    ngOnDestroy(): void {
      this.getAllWishList?.unsubscribe()
      this.removeAllWishList?.unsubscribe()
      this.addToCartWishList?.unsubscribe()

    }
    ///----------------------------------------------------Start
  ngOnInit(): void {
    this.getAllWishList= this._WishlistService.getWishlist().subscribe({
      next: (res) =>{
       this.productsList=res.data
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
    ///----------------------------------------------------RenoveItem
  removeItem(id:string|undefined):void{
   this.removeAllWishList= this._WishlistService.removeProduct(id).subscribe({
      next: (res) =>{
        // this.productsList= res.data
        this._ToastrService.success(res.message ,'Fresh Card')
        localStorage.setItem('heart',res.data)
        this._WishlistService.getWishlist().subscribe({
          next: (res) =>{
            this.productsList=res.data
          }
        })
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
    ///----------------------------------------------------AddToCart
  addToCart(id:string):void{
   this.addToCartWishList= this._CartService.addProductsToCard(id).subscribe({
      next: (res) =>{
        this._ToastrService.success(res.message ,'Fresh Card')
        this._CartService.cartNumber.set(res.numOfCartItems)
      },
      error: (err) =>{
        console.log(err);
      }

    })
  }

    ///---------------------------------------------------- SweetAlert Library
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


}
