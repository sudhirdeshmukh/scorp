import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Sugar',10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
    // Here slice will create  a copy of array. So Insert operations willl not affect original array accidently.
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit( this.ingredients.slice() );
  }
}
