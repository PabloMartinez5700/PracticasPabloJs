import { Producto } from "./models/product.js";
import { Store } from "./models/store.js";
import { View } from "./views/view.js";

class Controller {
  view = new View();
  storage = new Store();

  addProductToStorage() {

    let nombre = document.querySelector("#name").value;
    let precio = document.querySelector("#price").value;
    let unidades = document.querySelector("#units").value;
    if (nombre === "" || precio === "" || unidades === "" || isNaN(unidades) || isNaN(precio)) {
      return false;
    }
    let id = getNextId(this.storage.listProductsP4);
    let p = new Producto(id, nombre, precio, unidades);
    this.storage.listProductsP4.push(p);
    //Limpio el formulario de valores
    clearFormAddProduct();
    //Pinto la información
    this.view.renderNewProduct(p);
    return p;
  }

  deleteProductFromStore(id) {
    if (isNaN(id)) return false;
    if (id <= 0) return false;

    let productDelete = this.storage.findProduct(id);

    if (productDelete !== undefined) {
      let r1 = prompt(`Eliminar ${productDelete.name}`);
      if (r1 !== "si") return false;

      if (productDelete.units > 0) {
        let r2 = prompt(`Este producto tiene ${productDelete.units} unidades. ¿Quiere confirmar?`);
        if (r2 !== "si") return false;
      }
      this.storage.delProduct(id);
      //Llamar a la vista para quitar el producto
      this.view.renderDelProduct(id);
    }
  }

  changeProductStock(id, stockIncement) {
   
    if (id <= 0 || isNaN(id) || id === undefined) return false;
    let p = this.storage.findProduct(id);
    if (p === undefined || p === null) return false;
    if (stockIncement <= 0 || stockIncement === undefined || stockIncement === null || isNaN(stockIncement)) return false;
  
    if(!p.increaseStock(parseInt(stockIncement))) {
      alert('Error en el stock')
    }
    this.view.renderChangeStock(p)

  }
}

function clearFormAddProduct() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
  document.querySelector("#units").value = "";
}

function getNextId(array) {
  let idMax = Math.max(...array.map((attribute) => attribute.id), 0);
  return idMax + 1;
}


export { Controller };