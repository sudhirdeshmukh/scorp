import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // ingredients:Ingredient[] = [
  //   new Ingredient('Apple', 5),
  //   new Ingredient('Sugar',10)
  // ]
  ingredients:Ingredient[];

  subscription: Subscription;

  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
                          .subscribe((ingredients: Ingredient[])=>{
                            this.ingredients = ingredients;
                          });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
