export type Recipe = {
  name: string;
  manual: string;
  ingredients: Ingredient[];
}

export type Ingredient = {
  name: string;
  amount: number;
  unit: Unit;
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