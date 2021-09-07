import Item from "./Item";
import TaxItem from "./TaxItem";
import MessageData from "./MessageData";

export default class Order {
  items: Item[] = [];
  messageData: MessageData;

  constructor(messageData: MessageData) {
    this.items = [];
    this.messageData = messageData;
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getTaxes() {
    let taxes = 0;
    for (const item of this.items) {
      if(item instanceof TaxItem) {
        taxes += item.calculateTax();
      }
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

  async printMessage(lang:string){
    const message = await this.messageData.read(lang);
    return message.replace("{total}", String(this.getTotal())).replace('{taxes}', String(this.getTaxes()));
  }
}