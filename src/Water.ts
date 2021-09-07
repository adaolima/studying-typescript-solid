import Item from "./Item";

export default class Water extends Item {
  getTax(): number {
    return 0;
  }
}