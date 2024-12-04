import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { Prisma } from '@prisma/client';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  public findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientService.findOne(id);
  }

  @Post()
  public create(@Body() ingredient: Prisma.IngredientEntityCreateInput) {
    return this.ingredientService.create(ingredient);
  }

  @Patch(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() ingredient: Prisma.IngredientEntityUpdateInput,
  ) {
    return this.ingredientService.update(id, ingredient);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientService.delete(id);
  }
}
