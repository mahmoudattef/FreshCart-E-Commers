import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Ibrand } from '../../core/interfaces/ibrand';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit ,OnDestroy{
  private readonly _BrandsService=inject(BrandsService)
  brands:Ibrand[]=[]
  isClicked:boolean=false
  name:string=''
  slug:string=''
  img:string=''
  brandUnSub !:Subscription

  ngOnInit(): void {
    this.brandUnSub= this._BrandsService.getAllBrands().subscribe({
      next: (res) =>{
        this.brands=res.data
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  ngOnDestroy():void {
    this.brandUnSub?.unsubscribe()
  }
  openModule(img:string,slug:string,name:string):void{
    this.isClicked=true
    this.name=name
    this.img=img
    this.slug=slug

  }


}
