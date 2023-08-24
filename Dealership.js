const Dealership = function (name, maxCars) {
  this.name = name;
  this.maxCars = maxCars;
  this.carsInStock = [];
};

// getters and setters for properties

Dealership.prototype.getName = function () {
  return this.name;
};

Dealership.prototype.setName = function (name) {
  this.name = name;
};

Dealership.prototype.getMaxCars = function () {
  return this.maxCars;
};

Dealership.prototype.setMaxCars = function (maxCars) {
  this.maxCars = maxCars;
};

// methods

Dealership.prototype.countAllCars = function () {
  return this.carsInStock.length;
};

Dealership.prototype.addCar = function (car) {
  if (this.carsInStock.length < this.maxCars) {
    this.carsInStock.push(car);
  }
};

Dealership.prototype.getCarManufacturers = function () {
  return this.carsInStock.map((car) => car.manufacturer);
};

Dealership.prototype.findAllCarsByManufacturer = function (manufacturer) {
  return this.carsInStock.filter((car) => car.manufacturer === manufacturer);
};

Dealership.prototype.searchCars = function (query, property) {
  return this.carsInStock.filter((car) => car(property) === query);
};

Dealership.prototype.totalValueOfAllCarsInStock = function () {
  return this.carsInStock.reduce((reducer, car) => reducer + car.price, 0);
};

Dealership.prototype.sellCar = function (car, customer) {
  if (customer.wallet > car.price) {
    this.carsInStock = this.carsInStock.filter(
      (dealershipCar) => dealershipCar !== car
    );
    customer.buyCar(car);
  }
};

module.exports = Dealership;
