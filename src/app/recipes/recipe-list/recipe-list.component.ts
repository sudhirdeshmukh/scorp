import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Rec Description', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp')
    , new Recipe('Another Test Recipe', 'Another Rec Description', 'https://www.ndtv.com/cooks/images/gulab%20jamun%20new.jpg?downsize=650:400&output-quality=70&output-format=webp')
  ];

  @Output() recipeIsSelected1 = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }

  selectedRecipe(recipe:Recipe){
    this.recipeIsSelected1.emit(recipe);
  }

}
