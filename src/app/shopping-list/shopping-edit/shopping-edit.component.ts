import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amt') amtRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    const newIngredient = new Ingredient(this.nameRef.nativeElement.value, this.amtRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);

  }
}
