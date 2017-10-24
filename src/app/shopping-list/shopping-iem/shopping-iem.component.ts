import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-iem',
  templateUrl: './shopping-iem.component.html',
  styleUrls: ['./shopping-iem.component.css']
})
export class ShoppingIemComponent implements OnInit {
@Output() ingredients = new EventEmitter<Ingredient>();
  constructor(private slService : ShoppingService) { }

  ngOnInit() {
  }
  onAdd(name,amount){
    this.slService.addIngredient(new Ingredient(name,amount));
   }
}
