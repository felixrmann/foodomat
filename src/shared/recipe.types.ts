import { Unit } from './constants.types';

export type Recipe = {
  id: number;
  name: string;
  manual: string;
  image: Blob | null;
  source: string | null; // source from where the recipe was found
  ingredients: Ingredient[];
}

export type Ingredient = {
  id: number;
  name: string;
  unit: Unit;
  amount: number;
}
