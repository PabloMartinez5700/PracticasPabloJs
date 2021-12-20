class Producto {
  constructor(id, name, price, units = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.units = units;
    this.importe = this.productImport()
  }

  incrementStock(amount) {
    let result = parseInt(this.units)  + amount;
    if (result < 0) return false;
    this.units = result;
    return true;
  }

  productImport() {
      return this.price * this.units;
  }
}

export {Producto};

