import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredient:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Sugar',10)
  ]

  constructor() { }

  ngOnInit() {
  }

}
