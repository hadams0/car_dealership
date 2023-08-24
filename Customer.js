const Customer = function (name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.car = null;
};

Customer.prototype.buyCar = (car) => {
  this.car = car;
};

module.exports = Customer;
