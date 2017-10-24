import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient("mangoes", 4),
        new Ingredient("berrys", 4),
        new Ingredient("grapes", 4),
      ];
    getingredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient); 
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
} 