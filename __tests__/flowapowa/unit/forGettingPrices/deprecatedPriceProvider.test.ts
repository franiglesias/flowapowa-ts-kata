import { describe, expect, it } from 'vitest'
import { DeprecatedPriceProvider } from '../../../../src/flowapowa/forGettingPrices/deprecatedPriceProvider.js'

describe('DeprecatedPriceProvider', () => {
  it('should allow adding prices', () => {
    const provider = new DeprecatedPriceProvider()
    provider.add('rose', 1.50)
    provider.add('daisy', 0.80)
    expect(provider.getPrice('rose')).toBe(1.50)
    expect(provider.getPrice('daisy')).toBe(0.80)
  })
})
