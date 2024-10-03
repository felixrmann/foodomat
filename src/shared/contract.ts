/**
 * All general types
 */

export enum Weekday {
  MON = 0,
  TUE = 1,
  WED = 2,
  THU = 3,
  FRI = 4,
  SAT = 5,
  SUN = 6
}

export enum Month {
  JAN = 0,
  Feb = 1,
  Mar = 2,
  Apr = 3,
  May = 4,
  Jun = 5,
  Jul = 6,
  Aug = 7,
  Sep = 8,
  Oct = 9,
  Nov = 10,
  Dec = 11
}

export enum Unit {
  GRAM = 'g',
  KILO_GRAM = 'kg',
  CUP = 'cup',
  MILLI_LITER = 'ml',
  CENTI_LITER = 'cl',
  DECI_LITER = 'dl',
  LITER = 'l',
  TEA_SPOON = 'tsp',
  TABLE_SPOON = 'tbsp'
}

/**
 * All types for the planner
 */

export type PlanableMonthDto = {
  id: number;
  month: Month;
  year: number;
  planables: PlanableDto[];
}

export type PlanableDto = {
  id: number;
  date: Date;
  recipe: RecipeDto | null;
}

/**
 * All types for the recipe
 */

export type RecipeDto = {
  id: number;
  name: string;
  manual: string;
  ingredients: IngredientDto[];
}

export type IngredientDto = {
  id: number;
  name: string;
  amount: number;
  unit: Unit;
}
