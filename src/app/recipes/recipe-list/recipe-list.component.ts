import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeIsSelected1 = new EventEmitter<Recipe>()

  recipes: Recipe[];

  constructor( private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  selectedRecipe(recipe:Recipe){
    this.recipeIsSelected1.emit(recipe);
  }

}
