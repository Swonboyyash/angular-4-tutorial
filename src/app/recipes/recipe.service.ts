import {Recipe} from './recipe.model';
<<<<<<< HEAD
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

=======
import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
>>>>>>> efae416578d4ba53d69afabd0e967eae3f049b28
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
     'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]),
    new Recipe('A Test',
      'This is simply a test',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg', [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]),
  ];

  getRecipe(): Recipe[] {
      return this.recipes.slice();
  }

}
