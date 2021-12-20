import {Producto} from "./product.js";

class Store {
  constructor(id) {
    this.id = id;
    this.listProducts = [];
  }

  findProduct(id) {
    for (let producto of this.listProducts) {
      if (id == producto.id) return producto;
    }
    return undefined;
  }

  addProduct(id, name, price) {
    if (this.findProduct(id) === undefined) {
      let tempProduct = new ProductoP3(id, name, price);
      this.listProducts.push(tempProduct);
      return tempProduct;
    }
    return false;
  }

  delProduct(id) {
    if (this.findProduct(id) === undefined) return false;
    else {
      let tempProduct = this.findProduct(id);
      if (tempProduct.units == 0) {
        this.listProducts.splice(this.listProducts.indexOf(tempProduct, 0), 1);
        return tempProduct;
      }
    }
    return false;
  }

  changeProductUnits(id, unitsUpdate) {
    //Primero compruebo si existe o no el producto
    if (this.findProduct(id) === undefined) return false;
    else {
      let tempProduct = this.findProduct(id); 
      let unitsTemp = tempProduct.units; 
      unitsTemp += unitsUpdate; 
      if (unitsTemp < 0) return false;
      tempProduct.units = unitsTemp; 
      return tempProduct;
    }
  }

  totalImport() {
    let result = 0;
    for (let producto of this.listProducts) {
      result += producto.productImport();
    }
    return result;
  }

  underStock(units) {
    let r = this.listProducts.slice();//El metodo slice hace una copia independiente
    return r.filter((product) => product.units <= units);
  }

  orderByUnits() {
    let r = this.listProducts.slice();
    return r.sort((previosElement, nextElement) => (previosElement.units < nextElement.units ? 1 : -1));
  }

  orderByName() {
    let r = this.listProducts.slice();
    return r.sort((previus, next) => (previus.name.toLowerCase() > next.name.toLowerCase() ? 1 : -1));
  }
}
export {Store};