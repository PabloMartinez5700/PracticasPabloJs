import { Producto} from "./product.js";

class Store {
  constructor(id) {
    this.id = id;
    this.listProductsP4 = [];
  }

  findProduct(id) {
    for (let producto of this.listProductsP4) {
      if (id == producto.id) return producto;
    }
    return undefined;
  }

  addProduct(id, name, price) {
    if (this.findProduct(id) === undefined) {
      let tempProduct = new Producto(id, name, price);
      this.listProductsP4.push(tempProduct);
      return tempProduct;
    }
    return false;
  }

  delProduct(id) {
    if (this.findProduct(id) === undefined) return false;
    let tempProduct = this.findProduct(id);
    // if (tempProduct.units == 0) {
    this.listProductsP4.splice(this.listProductsP4.indexOf(tempProduct, 0), 1);
    return tempProduct;
  }

  changeProductUnits(id, unitsUpdate) {
    if (this.findProduct(id) === undefined) return false;
    else {
      let tempProduct = this.findProduct(id); //Recupero el producto que necesito
      let unitsTemp = tempProduct.units; //Guardo temporalmente la cantidad del producto
      unitsTemp += unitsUpdate;
      if (unitsTemp < 0) return false;
      tempProduct.units = unitsTemp;
      return tempProduct;
    }
  }

  underStock(units) {
    let r = this.listProductsP4.slice(); //El metodo slice hace una copia independiente
    return r.filter((product) => product.units <= units);
  }

  totalImport() {
    let result = 0;
    for (let producto of this.listProductsP4) {
      result += producto.productImport();
    }
    return result;
  }

  orderByName() {
    let r = this.listProductsP4.slice();
    return r.sort((previus, next) => (previus.name.toLowerCase() > next.name.toLowerCase() ? 1 : -1));
  }

  orderByUnits() {
    let r = this.listProductsP4.slice();
    return r.sort((previosElement, nextElement) => (previosElement.units < nextElement.units ? 1 : -1));
  }
}
export { StoreP4 };