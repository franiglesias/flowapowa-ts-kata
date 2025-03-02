import { Bouquet } from './bouquet.js'

export interface ReceiptPrinter {
  print(bouquet: Bouquet): void

  output(): string
}
