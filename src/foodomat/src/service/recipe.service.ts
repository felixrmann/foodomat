import { Injectable } from '@nestjs/common';
import { Recipe } from '../../../shared/types/recipe.types';

@Injectable()
export class RecipeService {
  public async addRecipe(recipe: Recipe) {
    return;
  }
}
