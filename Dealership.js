const Dealership = function (name, maxCars, carsInStock) {
  this.name = name;
  this.maxCars = maxCars;
  this.carsInStock = carsInStock;
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
