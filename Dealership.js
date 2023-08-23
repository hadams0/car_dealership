const Car = require("./Car");
const Dealership = require("./Car");

const Dealership = function (name, maxCars) {
  this.name = name;
  this.maxCars = maxCars;
  this.carsInStock = [];
};

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

Dealership.prototype.getCarsInStock = function () {
  return this.carsInStock;
};

Dealership.prototype.setCarsInStock = function (carsInStock) {
  this.carsInStock = carsInStock;
};

Dealership.prototype.countCars = function () {
  return this.carsInStock.length;
};

Dealership.prototype.addCar = function () {
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

Dealership.prototype.totalValueOfAllCarsInStock = function () {
  return this.carsInStock.reduce((reducer, car) => reducer + car.price, 0);
};

module.exports = Dealership;
