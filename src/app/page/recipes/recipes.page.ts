import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  public recipes: Recipe[];
  private readonly recipeService: RecipeService;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
    this.recipes = this.recipeService.getAllRecipes();
  }

  ngOnInit() {
  }
}
