import { Recipe } from './recipe.types';
import { MealType } from './constants.types';

export type Plan = {
  id: number;
  date: Date;
  recipe: Recipe;
  mealType: MealType;
}
