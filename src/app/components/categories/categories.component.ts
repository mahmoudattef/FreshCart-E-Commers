import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Icategory } from '../../core/interfaces/icategory';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit ,OnDestroy {

  private readonly _CategoriesService=inject(CategoriesService)
  categoriesList:Icategory[]=[]
  categoriesUnSub !:Subscription

  ngOnInit(): void {
    this.categoriesUnSub= this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList = res.data
      },
      error: (error) => {
        console.error('Error:', error);
      }
    })
  }
  ngOnDestroy():void {
    this.categoriesUnSub?.unsubscribe()
  }




}
