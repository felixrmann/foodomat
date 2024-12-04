import { Test, TestingModule } from '@nestjs/testing';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { Unit } from '../../../shared/constants.types';
import { DatabaseService } from '../database/database.service';

describe('IngredientController', () => {
  let controller: IngredientController;
  let service: IngredientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientController],
      providers: [IngredientService, DatabaseService],
    }).compile();

    controller = module.get<IngredientController>(IngredientController);
    service = module.get<IngredientService>(IngredientService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of ingredients', async () => {
      const result = [getRandomIngredient()];
      jest
        .spyOn(service, 'findAll')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findAll()).toBe(result);
      expect(await controller.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single ingredient', async () => {
      const result = getRandomIngredient();
      jest
        .spyOn(service, 'findOne')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.findOne(1)).toBe(result);
      expect(await controller.findOne(1)).toEqual(result);
    });
  });
});

function getRandomIngredient(): any {
  return {
    name: new Date().toISOString(),
    unit: Unit.GRAM,
  };
}
