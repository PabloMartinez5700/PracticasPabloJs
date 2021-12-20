class Producto {

  constructor(id, name, price, units) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.units = units;
  }

  changeUnits(amount) {
    let result = this.units + amount;
    if (result < 0) return false;
    this.units = result;
    return true;
  }

  productImport() {
      return this.price * this.units;
  }
}

  Producto.prototype.toString = function() {
    return`${this.name} (${this.units}): ${this.price} €/u => ${this.productImport()}\n`;
  } 
export {Producto};

