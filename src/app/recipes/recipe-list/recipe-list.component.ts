import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})

export class RecipeListComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> efae416578d4ba53d69afabd0e967eae3f049b28
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }
<<<<<<< HEAD


=======
>>>>>>> efae416578d4ba53d69afabd0e967eae3f049b28
}
