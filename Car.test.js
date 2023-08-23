const Car = require("./Car");

test("can access manufacturer property", () => {
  const car = new Car("Volkswagon", 10000, "Automatic");

  const expected = "Volkswagon";
  const actual = car.manufacturer;
  expect(actual).toBe(expected);
});

test("can access price property", () => {
  const car = new Car("Volkswagon", 10000, "Automatic");

  const expected = "10000";
  const actual = car.price;
  expect(actual).toBe(expected);
});

test("can access engine type property", () => {
  const car = new Car("Volkswagon", 10000, "Automatic");

  const expected = "Automatic";
  const actual = car.engineType;
  expect(actual).toBe(expected);
});
