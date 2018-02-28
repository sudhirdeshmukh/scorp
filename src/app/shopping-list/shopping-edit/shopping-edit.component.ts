import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('name') nameRef: ElementRef;
  // @ViewChild('amt') amtRef: ElementRef;

  //@Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor( private slService:ShoppingListService ) { }

  ngOnInit() {
  }

  addItem( form: NgForm ){
    const value = form.value;
    //const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amtRef.nativeElement.value );
    const newIngredient = new Ingredient( value.name, value.amt );
    this.slService.addIngredient( newIngredient );
    //this.ingredientAdded.emit(newIngredient);
  }
}
