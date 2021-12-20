class Producto {

    constructor(id,nombre,img,precio,categoria,cantidad) {
        this.id = id
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.categoria = categoria
        if(cantidad == '') this.cantidad = 0
        else this.cantidad = parseInt(cantidad)
    }

    productImport(){
      return ((this.canntidad * this.precio).toFixed(2));
    }

}
