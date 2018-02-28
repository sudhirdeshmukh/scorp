import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
//@Input() recipe:Recipe;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    // id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params
      .subscribe((params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe( this.id );
      })

  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList( this.recipe.ingredients )
  }

  onEditClicked(){
    //this.router.navigate( ['../',this.id, 'edit'], { relativeTo: this.activatedRoute } )
    this.router.navigate( ['edit'], { relativeTo: this.activatedRoute } ) // id was already there in path
  }
}
