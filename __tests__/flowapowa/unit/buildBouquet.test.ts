import { describe, expect, it } from 'vitest'
import { BuildBouquet } from '../../../src/flowapowa/application/buildBouquet.js'
import { BouquetBuilder } from '../../../src/flowapowa/application/bouquetBuilder.js'
import { DeprecatedPriceProvider } from '../../../src/flowapowa/forGettingPrices/deprecatedPriceProvider.js'

describe('BuildBouquet', () => {
  it('should build a Bouquet from a raw recipe', () => {
    const priceProvider = new DeprecatedPriceProvider()
    priceProvider.add('rose', 1.50)
    const bouquetBuilder = new BouquetBuilder(priceProvider)
    const buildBouquet = new BuildBouquet(bouquetBuilder)
    const bouquet = buildBouquet.withRecipe('rose:12', 35)
    const expected: string = `Rose        12   1.50   18.00
Crafting                 6.30
-----------------------------
Total                   24.30`.trim()
    expect(bouquet.receipt().print()).toBe(expected)
  })
})
