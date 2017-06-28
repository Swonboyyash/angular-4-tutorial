import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
    new Recipe('A Test', 'This is simply a test', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
  ];

  getRecipe(): Recipe[] {
      return this.recipes.slice();
  }

}
