import { BuildBouquet } from './buildBouquet.js'
import { ReceiptPrinter } from './receiptPrinter.js'

export class Flowapowa {
  private buildBouquet: BuildBouquet
  private receiptPrinter: ReceiptPrinter

  constructor(buildBouquet: BuildBouquet, receiptPrinter: ReceiptPrinter) {
    this.buildBouquet = buildBouquet
    this.receiptPrinter = receiptPrinter
  }

  craftBouquet(recipe: string, crafting: number): string {
    const bouquet = this.buildBouquet.withRecipe(recipe, crafting)
    this.receiptPrinter.print(bouquet)
    return this.receiptPrinter.output()
  }
}
