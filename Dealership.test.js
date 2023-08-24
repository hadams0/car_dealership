const Car = require("./Car");
const Dealership = require("./Dealership");

beforeEach(() => {
  dealership = new Dealership("CarsBuy", 50);
});

describe("Testing dealership methods", () => {
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

  test("can return array of car manufacturers", () => {
    const car1 = new Car("Ford", 100, "Manual");
    const car2 = new Car("Volkswagon", 50, "Automatic");

    dealership.addCar(car1);
    dealership.addCar(car2);

    expected = ["Ford", "Volkswagon"];
    actual = dealership.getCarManufacturers();

    expect(actual).toStrictEqual(expected);
  });

  test("return nothing if manufacturer doesn't exist");

  test("Return car from specific manufacturer");

  test("can calculate total value of all cars in stock", () => {
    const car1 = new Car("Ford", 100, "Manual");
    const car2 = new Car("Volkswagon", 50, "Automatic");

    dealership.addCar(car1);
    dealership.addCar(car2);

    expected = 150;
    actual = dealership.totalValueOfAllCarsInStock();

    expect(actual).toBe(expected);
  });
});
