import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {

  constructor (description: string, price: number) {
    super("Wisky", description, price)
  }

  getTax(): number {
    return 20;
  }
}