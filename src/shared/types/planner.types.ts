import { Recipe } from './recipe.types';

export type PlanableMonth = {
  id: number;
  month: Month;
  year: number;
  planables: Planable[];
  active: boolean;
}

export type Planable = {
  id: number;
  date: Date;
  recipe: Recipe | null;
  active: boolean;
}

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
