import Beer from "./Beer";
import MessageDataFile from "./MessageDataFile";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisk";

test("Should create an order and calculate the total", function () {

  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));
  const total = order.getTotal();

  expect(total).toBe(111);
});


test("Should create an order and calculate the taxes", function () {

  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); //20%
  order.addItem(new Water("Crystal", 1)); // no taxes

  const taxes= order.getTaxes();

  expect(taxes).toBe(21);
});

test("Should create an order and print a message in english", async function () {

  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); //20%
  order.addItem(new Water("Crystal", 1)); // no taxes

  const message = await order.printMessage('en');

  expect(message).toBe("The total is US$ 111, and the taxes are US$ 21. Thank you, for your purchase!");
});

test("Should create an order and print a message in portuguese", async function () {

  const order = new Order(new MessageDataFile());
  order.addItem(new Beer("Brahma", 10)); // 10%
  order.addItem(new Whisky("Jack Daniels", 100)); //20%
  order.addItem(new Water("Crystal", 1)); // no taxes

  const message = await order.printMessage('pt');

  expect(message).toBe("O total é de R$ 111, e as taxas são R$ 21. Obrigado pela compra!");
});