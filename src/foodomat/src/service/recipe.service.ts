import { Injectable } from '@nestjs/common';
import { RecipeDto } from '../../../shared/contract';

@Injectable()
export class RecipeService {
  public async addRecipe(recipe: RecipeDto) {
    return;
  }
}
