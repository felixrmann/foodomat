import { Month, Unit } from '../../../../shared/contract';
import { Planable } from '../types/planner.types';

export function getRandomId(): number {
  return new Date().getDate() * Math.floor(Math.random() * 100000);
}

export function getAmountOfDaysInMonth(year: number | undefined, month: Month): number {
  return new Date(year ?? getCurrentYear(), month, 0).getDate();
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getCurrentMonth(): Month {
  return new Date().getMonth();
}

export const defaultFood: Planable[] = [
  {
    id: 1111111,
    date: new Date(2024, 7, 1),
    recipe: {
      id: 123123,
      name: 'Nudeln1',
      manual: '',
      ingredients: [
        {
          id: 456456,
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
      id: 374563,
      name: 'Nudeln2',
      manual: '',
      ingredients: [
        {
          id: 23534634,
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
      id: 87654324,
      name: 'Nudeln3',
      manual: '',
      ingredients: [
        {
          id: 58234,
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
      id: 230492,
      name: 'Nudeln4',
      manual: '',
      ingredients: [
        {
          id: 948573,
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
      id: 45679824,
      name: 'Müsli',
      manual: '',
      ingredients: [
        {
          id: 567245,
          name: 'Cornflakes',
          amount: 200,
          unit: Unit.KILO_GRAM
        },
        {
          id: 45237945,
          name: 'Milch',
          amount: 500,
          unit: Unit.MILLI_LITER
        },
        {
          id: 456720845,
          name: 'Caotina',
          amount: 1,
          unit: Unit.TABLE_SPOON
        }
      ]
    },
    active: false,
  }
]
