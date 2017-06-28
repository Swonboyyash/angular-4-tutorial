import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
<<<<<<< HEAD
import {RecipeService} from '../../recipe.service';
;
=======
import { RecipeService } from '../../recipe.service';
>>>>>>> efae416578d4ba53d69afabd0e967eae3f049b28
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipeItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
