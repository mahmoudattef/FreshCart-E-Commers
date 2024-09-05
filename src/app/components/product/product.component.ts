import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,CarouselModule,TitleCasePipe,UpperCasePipe,CurrencyPipe,TermtextPipe,SearchPipe,UpperCasePipe,  NgxPaginationModule],

  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit ,OnDestroy{
  private readonly _ProductsService= inject (ProductsService)
  private readonly _CartService= inject (CartService)
  private readonly _WishlistService= inject (WishlistService)
  private readonly _ToastrService= inject (ToastrService)

  productsList:IProduct[]=[]
  text:string=""
  wishId:any=null
  pageSize: number = 0;
  currentPage: number = 1;
  total: number = 0;
  getAllProductUnsub !:Subscription
  addCartUnsub !:Subscription
  addWishListUnsub !:Subscription
  pageChangedUnSub !:Subscription

  ngOnInit(): void {
  this.getAllProductUnsub=this._ProductsService.getAllProducts().subscribe({

      next:(res)=>{
        this.pageSize = res.metadata.limit;
        this.currentPage = res.metadata.currentPage;
        this.total = res.results;
        this.productsList=res.data;
        this.wishId=res.data
        if(localStorage.getItem('heart')  !==null){
          this.wishId=localStorage.getItem('heart')
        }

      },

      error:(error)=>{
        console.error(error)
      }
     })
   }

   ngOnDestroy(): void {
    this.getAllProductUnsub?.unsubscribe()
    this.addCartUnsub?.unsubscribe()
    this.addWishListUnsub?.unsubscribe()
    this.pageChangedUnSub?.unsubscribe()

  }



  addCart(id:string):void{
   this.addCartUnsub= this._CartService.addProductsToCard(id).subscribe({
     next:(res)=>{
       this._ToastrService.success(res.message ,'Fresh Card')
       this._CartService.cartNumber.set(res.numOfCartItems)
   },
   error:(err)=>{
     console.log(err)
   }
 })
  }

  addWishList(id:string ):void{
   this.addWishListUnsub= this._WishlistService.addProductToWhishList(id).subscribe({
     next:(res)=>{
       this._ToastrService.success(res.message ,'Fresh Card')
       this.wishId=res.data
      localStorage.setItem('heart',this.wishId.toString())

     },
     error:(err)=>{
       console.log(err)
     }
   })
  }



  pageChanged(event: any): void {
   this.pageChangedUnSub= this._ProductsService.getAllProducts(event).subscribe({
      next: (response) => {
        this.productsList = response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;

      },
      error: (err) => {console.log(err);
      }
    });
  }


}
