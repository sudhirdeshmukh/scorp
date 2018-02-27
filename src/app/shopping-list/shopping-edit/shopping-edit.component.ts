import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amt') amtRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor( private slService:ShoppingListService ) { }

  ngOnInit() {
  }

  addItem(){
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amtRef.nativeElement.value );
    this.slService.addIngredient( newIngredient );
    //this.ingredientAdded.emit(newIngredient);
  }
}
