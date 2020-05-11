import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/model/Recipe';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  private router: Router;
  private activatedRoute: ActivatedRoute;
  private readonly recipeService: RecipeService;
  public loadedRecipe: Recipe | undefined;

  constructor(activatedRoute: ActivatedRoute, recipeService: RecipeService, router: Router) {
    this.activatedRoute = activatedRoute;
    this.recipeService = recipeService;
    this.router = router;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId: string | null = paramMap.get('recipeId');
      if (recipeId === null) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);

      if (this.loadedRecipe === undefined) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }

    });
  }

}
