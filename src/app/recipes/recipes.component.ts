import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
<<<<<<< HEAD
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
=======
    this.recipeService.recipeSelected
      .subscribe(
          (recipe:  Recipe) => {
              this.selectedRecipe = recipe;
          }
      );
>>>>>>> efae416578d4ba53d69afabd0e967eae3f049b28
  }

}
