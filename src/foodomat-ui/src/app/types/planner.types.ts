import { PlanableDto, PlanableMonthDto } from '../../../../shared/contract';

export type Planable = PlanableDto & {
  active: boolean;
}

export type PlanableMonth = PlanableMonthDto & {
  active: boolean;
}
