import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients : Ingredient[];
  constructor(private slService : ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.slService.getingredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient [])=>{
        this.ingredients = ingredients;
      }
    );
    
  }
  
}
