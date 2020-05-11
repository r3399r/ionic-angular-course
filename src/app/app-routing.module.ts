import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [{
      path: '',
      loadChildren: () => import('./page/recipes/recipes.module').then(m => m.RecipesPageModule)
    }
      , {
      path: ':recipeId',
      loadChildren: () => import('./page/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
    }]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
