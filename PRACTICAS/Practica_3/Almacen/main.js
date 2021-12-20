//import {StoreP3} from "./store";
//import {ProductoP3} from "./product";

let prod = new ProductoP3(1, 'TV Samgsum', 5694.43, 3);
let store = new StoreP3(1);

let p = store.addProduct(1, 'TV Samsung MP45', 345.95);
store.addProduct(2, 'Ábaco de madera', 245.95);
store.addProduct(3, 'impresora Epson LX-455', 45.95); 
store.addProduct(4, 'USB Kingston 16GB', 5.95);

store.changeProductUnits(2, 12)
store.changeProductUnits(4, 40)
store.changeProductUnits(2, -9)

store.delProduct(4);
store.delProduct(1);

console.log(store.orderByName().toString());
console.log(store.orderByUnits().toString());
console.log(store.underStock(10).toString());


