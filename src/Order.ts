import Item from "./Item";

export default class Order {
  items: Item[] = [];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTaxes() {
    let taxes = 0;
    for (const item of this.items) {
      taxes += item.calculateTax();
    }
    return taxes;
  }

  getTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}