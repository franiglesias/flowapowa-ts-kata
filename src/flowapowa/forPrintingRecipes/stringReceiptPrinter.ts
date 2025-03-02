import { ReceiptPrinter } from '../application/receiptPrinter.js'
import { Bouquet } from '../application/bouquet.js'

export class StringReceiptPrinter implements ReceiptPrinter {
  private toOutput: string

  output(): string {
    return this.toOutput
  }

  print(bouquet: Bouquet): void {
    this.toOutput = bouquet.receipt().print()
  }
}
