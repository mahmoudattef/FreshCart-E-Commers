import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProduct } from '../../core/interfaces/iproduct';
import { log } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit ,OnDestroy{
  private readonly _ActivatedRoute= inject (ActivatedRoute)
  private readonly _ProductsService= inject (ProductsService)
  detailsProduct:IProduct |null =null;

  getSpacificDatasub!:Subscription

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let idProduct=params.get('id');
       this.getSpacificDatasub= this._ProductsService.getSpecificProducts(idProduct).subscribe({
          next: (res) => {
            this.detailsProduct=res.data
        },
      error: (err) => {
        console.log(err);

      }
    })
  }

})
}
ngOnDestroy(): void {
  this.getSpacificDatasub?.unsubscribe()
}
}
