import Item from "./Item";

export default class Whisky extends Item {
  getTax(): number {
    return 20;
  }
}