import { describe, expect, it } from 'vitest'
import { VendorProduct } from '../../../../src/flowapowa/lib/VendorProduct.js'
import { NewVendorProductProvider } from '../../../../src/flowapowa/lib/NewVendorProductProvider.js'

describe('newVendorProductProvider', () => {
  it('should provide products by name', () => {
    const rose = new VendorProduct('rose', 1.5)
    const daisy = new VendorProduct('daisy', 0.8)
    const provider = new NewVendorProductProvider()
    provider.store(rose)
    provider.store(daisy)

    expect(provider.getProductByName('rose')).toEqual(rose)
    expect(provider.getProductByName('daisy')).toEqual(daisy)
  })
})
