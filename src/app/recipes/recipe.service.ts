import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  public recipeSelected = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
            'Rec Description',
            'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp',
            [
              new Ingredient('ABC',3),
              new Ingredient('DEF', 5)
            ]),
    new Recipe('Another Test Recipe',
            'Another Rec Description',
            'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp',
            [
              new Ingredient('ABC',3),
              new Ingredient('DEF', 5),
              new Ingredient('JKL',3),
              new Ingredient('LMN', 5)
            ])
  ];

  constructor( private slService: ShoppingListService ) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe( index: number ){
    return this.recipes[index];
  }

  addIngredientsToShoppingList( ingredients: Ingredient[] ){
    this.slService.addIngredients( ingredients );
  }
}
