import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Rec Description', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp')
    , new Recipe('Another Test Recipe', 'Another Rec Description', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

}
