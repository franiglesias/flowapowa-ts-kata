import { Bouquet } from './bouquet.js'
import { Recipe } from './recipe.js'
import { DeprecatedPriceProvider } from '../forGettingPrices/deprecatedPriceProvider.js'

export class BouquetBuilder {
  private readonly priceProvider: DeprecatedPriceProvider

  constructor(priceProvider: DeprecatedPriceProvider) {
    this.priceProvider = priceProvider
  }

  withRecipe(recipe: Recipe, crafting: number): Bouquet {
    return recipe.craft(new Bouquet(crafting), this.priceProvider)
  }
}
