import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/model/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'steak',
    imageUrl: 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2012/05/testkitchen_argentinesteak.jpg?resize=1280%2C%20560&ssl=1',
    ingredients: ['beef', 'sauce']
  }, {
    id: 'r2',
    title: 'spaghatti',
    imageUrl: 'https://d3l76hx23vw40a.cloudfront.net/recipe/bk154-010.jpg',
    ingredients: ['noodles', 'tomato']
  }];

  constructor() { }

  public getAllRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(recipeId: string): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === recipeId);
  }
}
