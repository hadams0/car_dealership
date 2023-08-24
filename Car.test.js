const Car = require("./Car");

let car;

beforeEach(() => {
  car = new Car("Volkswagon", 10000, "Automatic");
});

describe("Accessing car properties", () => {
  test("can access manufacturer property", () => {
    const expected = "Volkswagon";
    const actual = car.manufacturer;
    expect(actual).toBe(expected); //assertion
  });

  test("can access get manufacturer property", () => {
    const expected = "Volkswagon";
    const actual = car.getManufacturer();
    expect(actual).toBe(expected);
  });

  test("can access set manufacturer property", () => {
    car.setManufacturer("Ford");
    const expected = "Ford";
    const actual = car.getManufacturer();
    expect(actual).toBe(expected);
  });

  test("can access price property", () => {
    const expected = 10000;
    const actual = car.price;
    expect(actual).toBe(expected);
  });

  test("can access get price property", () => {
    const expected = 10000;
    const actual = car.getPrice();
    expect(actual).toBe(expected);
  });

  test("can access set price property", () => {
    car.setPrice(5000);
    const expected = 5000;
    const actual = car.getPrice();
    expect(actual).toBe(expected);
  });

  test("can access engine type property", () => {
    const expected = "Automatic";
    const actual = car.engineType;
    expect(actual).toBe(expected);
  });

  test("can access get engine type property", () => {
    const expected = "Automatic";
    const actual = car.getEngineType();
    expect(actual).toBe(expected);
  });

  test("can access set engine type property", () => {
    car.setEngineType("Manual");
    const expected = "Manual";
    const actual = car.getEngineType();
    expect(actual).toBe(expected);
  });
});
