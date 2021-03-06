import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter } from '@angular/core';

export class ShoppingService {

 ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  addIngredient(anIngredient: Ingredient) {
    this.ingredients.push(anIngredient);
    this.ingredientChanged.emit(this.ingredients.slice());
    }

  getIngredient() {
      return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    // Spread method which turns array of elements into a list of elements
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
