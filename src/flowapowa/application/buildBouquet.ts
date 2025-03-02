import { Bouquet } from './bouquet.js'
import { BouquetBuilder } from './bouquetBuilder.js'
import { Recipe } from './recipe.js'

export class BuildBouquet {
  private bouquetBuilder: BouquetBuilder

  constructor(bouquetBuilder: BouquetBuilder) {
    this.bouquetBuilder = bouquetBuilder
  }

  withRecipe(rawRecipe: string, crafting: number): Bouquet {
    const recipe: Recipe = Recipe.fromRawRecipe(rawRecipe)
    return this.bouquetBuilder.withRecipe(recipe, crafting)
  }
}
