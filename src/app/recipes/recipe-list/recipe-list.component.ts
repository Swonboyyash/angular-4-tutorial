import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Add an array of recipes. Starting code.
  // Create a Model file. This display how you model your objects
  recipes: Recipe[] = [
    new Recipe('Pasta', 'The way you make Pasta is ', 'http://www.seriouseats.com/recipes/assets_c/2016/08/20160827-cherry-tomato-pasta-13-thumb-1500xauto-433876.jpg'),
  ];


  constructor() { }

  ngOnInit() {
  }

}
