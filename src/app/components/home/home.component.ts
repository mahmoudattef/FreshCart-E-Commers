import { ToastrService } from 'ngx-toastr';
import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { error } from 'console';
import { IProduct } from '../../core/interfaces/iproduct';
import { Subscribable, Subscription } from 'rxjs';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategory } from '../../core/interfaces/icategory';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { TermtextPipe } from '../../core/pipes/termtext.pipe';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { WishlistService } from '../../core/services/wishlist.service';
import { HeartDirective } from '../../heart.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,FormsModule ,RouterLink,RouterLinkActive, TitleCasePipe,UpperCasePipe,CurrencyPipe,TermtextPipe,SearchPipe,HeartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy {

 private readonly  _ProductsService =inject (ProductsService)
 private readonly _CategoriesService =inject(CategoriesService)
 private readonly _CartService =inject(CartService)
 private readonly _ToastrService=inject(ToastrService)
 private readonly _NgxSpinnerService=inject(NgxSpinnerService)
 private readonly _WishlistService=inject(WishlistService)
  getAllProductSub !:Subscription
  getAllCategorySub !:Subscription
  addWishListUnsub !:Subscription
  addCartUnsub !:Subscription
productsList:IProduct[]=[]
categoriesList:Icategory[]=[]
isLoading:boolean=false;
wishId:any=null


text:string ="";

customOptionsMain: OwlOptions ={
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items: 1,
  nav: true
}

customOptionsCat: OwlOptions ={
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
}



ngOnDestroy(): void {
  this.getAllProductSub?.unsubscribe()
  this.getAllCategorySub?.unsubscribe()
  this.addWishListUnsub?.unsubscribe()
  this.addCartUnsub?.unsubscribe()
}
 ngOnInit(): void {

  this.getAllCategorySub= this._CategoriesService.getAllCategories().subscribe({

    next:(res)=>{
      this.categoriesList=res.data
      this.isLoading=true;
    },

    error:(err)=> {
      console.log(err);
      this.isLoading=false;

    },
  })


  this.getAllProductSub= this._ProductsService.getAllProducts().subscribe({

    next:(res)=>{
      this.productsList=res.data;
      this.isLoading=true;
      this.wishId=res.data
      if(localStorage.getItem('heart')  !==null){
        this.wishId=localStorage.getItem('heart')
      }


    },

    error:(error)=>{
      console.error(error)
      this.isLoading=false;
    }
   })
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

 addWishList(id:string):void{
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


}
