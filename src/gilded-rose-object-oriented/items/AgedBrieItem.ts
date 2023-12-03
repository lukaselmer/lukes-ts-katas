import { Item } from './Item'

export class AgedBrieItem extends Item {
  updateQuality() {
    this.decreaseSellIn()
    this.increaseQualityToMax50(this.expired ? 2 : 1)
  }
}
