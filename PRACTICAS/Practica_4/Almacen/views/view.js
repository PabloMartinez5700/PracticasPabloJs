import {Producto} from "../models/product.js";
import {Store} from "../models/store.js";

class View {

  renderNewProduct(product) {
    let tr = document.createElement("tr");
    tr.dataset.id = product.id;
    for (let key in product) {
      let th = document.createElement("th");
      let valueTh = document.createTextNode(product[key]);
      th.appendChild(valueTh);
      tr.appendChild(th);
    }
    tbody.appendChild(tr);
    console.log(tr);
  }

  renderDelProduct(id) {
    //De esta forma puedo recuperar un elemento html con atributo data
    let dataString = `[data-id="${id}"]`;
    document.querySelector(dataString).remove();
  }
  renderChangeStock(product) {
    let dataString = `[data-id="${product.id}"]`;
    let tdUnit = document.querySelector(dataString).children[3];
    let stock = product.units;
    tdUnit.innerText = stock
  }
  renderEditProduct(product) {}
  renderStoreImport() {}
}

export { View };