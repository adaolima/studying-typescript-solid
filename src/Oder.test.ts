import Item from "./Item";
import Order from "./Order";

test("Should create an order and calculate the total", function () {

  const order = new Order();
  order.addItem(new Item("Beer", "Brahma", 10));
  order.addItem(new Item("Whisky", "Jack Daniels", 100));
  order.addItem(new Item("Water", "Crystal", 1));
  const total = order.getTotal();

  expect(total).toBe(111);
});


test("Should create an order and calculate the taxes", function () {

  const order = new Order();
  order.addItem(new Item("Beer", "Brahma", 10)); // 10%
  order.addItem(new Item("Whisky", "Jack Daniels", 100)); //20%
  order.addItem(new Item("Water", "Crystal", 1)); // no taxes

  const taxes= order.getTaxes();

  expect(taxes).toBe(21);
});