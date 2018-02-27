//import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { RecipeService } from './../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
// @Output() recipeIsSelected = new EventEmitter<void>()

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  recipeSelected(){
    //this.recipeIsSelected.emit();
    this.recipeService.recipeSelected.emit( this.recipe );
  }
}
