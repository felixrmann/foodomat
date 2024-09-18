import { Month, Planable } from '../../../../shared/types/planner.types';
import { Unit } from '../../../../shared/types/recipe.types';

export function getRandomId(): number {
  return new Date().getDate() * Math.floor(Math.random() * 100000);
}

export function getAmountOfDaysInMonth(year: number | undefined, month: Month): number {
  return new Date(year ?? getCurrentYear(), month, 0).getDate();
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export const defaultFood: Planable[] = [
  {
    id: 1111111,
    date: new Date(2024, 7, 1),
    recipe: {
      name: 'Nudeln1',
      manual: '',
      ingredients: [
        {
          name: 'Nudeln',
          amount: 500,
          unit: Unit.GRAM
        }
      ],
    },
    active: false,
  },
  {
    id: 2222222,
    date: new Date(2024, 7, 22),
    recipe: {
      name: 'Nudeln2',
      manual: '',
      ingredients: [
        {
          name: 'Nudeln',
          amount: 500,
          unit: Unit.GRAM
        }
      ],
    },
    active: false,
  },
  {
    id: 3333333,
    date: new Date(2024, 7, 17),
    recipe: {
      name: 'Nudeln3',
      manual: '',
      ingredients: [
        {
          name: 'Nudeln',
          amount: 500,
          unit: Unit.GRAM
        }
      ],
    },
    active: false,
  },
  {
    id: 444444,
    date: new Date(2024, 7, 29),
    recipe: {
      name: 'Nudeln4',
      manual: '',
      ingredients: [
        {
          name: 'Nudeln',
          amount: 500,
          unit: Unit.GRAM
        }
      ],
    },
    active: false,
  },
  {
    id: 5555555,
    date: new Date(2024, 6, 6),
    recipe: {
      name: 'Müsli',
      manual: '',
      ingredients: [
        {
          name: 'Cornflakes',
          amount: 200,
          unit: Unit.KILO_GRAM
        },
        {
          name: 'Milch',
          amount: 500,
          unit: Unit.MILLI_LITER
        },
        {
          name: 'Caotina',
          amount: 1,
          unit: Unit.TABLE_SPOON
        }
      ]
    },
    active: false,
  }
]
