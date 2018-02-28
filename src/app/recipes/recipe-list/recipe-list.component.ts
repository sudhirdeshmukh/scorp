import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeIsSelected1 = new EventEmitter<Recipe>()

  recipes: Recipe[];

  constructor( private recipeService: RecipeService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // selectedRecipe(recipe:Recipe){
  //   this.recipeIsSelected1.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate( ['new'], { relativeTo:this.activatedRoute })
  }
}
