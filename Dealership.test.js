const Car = require("./Car");
const Dealership = require("./Dealership");

beforeEach(() => {
  dealership = new Dealership("CarsBuy", 50);
});

test("can count all cars", () => {
  const car1 = new Car("Ford", 100, "Manual");
  const car2 = new Car("Volkswagon", 50, "Automatic");

  dealership.addCar(car1);
  dealership.addCar(car2);

  const expected = 2;
  const actual = dealership.countAllCars();

  expect(actual).toBe(expected);
});

test("can add car to stock", () => {
  const car = new Car("Ford", 100, "Manual");

  dealership.addCar(car);

  const expected = 1;
  const actual = dealership.countAllCars();

  expect(actual).toBe(expected);
});

test("can return array containing each car manufacturer", () => {
  const car1 = new Car("Ford", 100, "Manual");
  const car2 = new Car("Volkswagon", 50, "Automatic");

  dealership.addCar(car1);
  dealership.addCar(car2);

  expected = ["Ford", "Volkswagon"];
  actual = dealership.getCarManufacturers();

  expect(actual).toStrictEqual(expected);
});

test("can calculate toal value of cars in stock", () => {
  const car1 = new Car("Ford", 100, "Manual");
  const car2 = new Car("Volkswagon", 50, "Automatic");

  dealership.addCar(car1);
  dealership.addCar(car2);

  expected = 150;
  actual = dealership.totalValueOfAllCarsInStock();

  expect(actual).toBe(expected);
});
