import { Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

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
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next( this.ingredients.slice() );
  }
}
