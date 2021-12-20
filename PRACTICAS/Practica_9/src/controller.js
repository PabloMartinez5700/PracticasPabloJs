class controller {

    constructor() {
        this.almacen = new Store(1, []);
        this.view = new views();
    }

    addProductToStore() {
        event.preventDefault();
        let nombre = document.getElementById('newprod-name').value;
        let precio = document.getElementById('newprod-precio').value;
        let unidades = document.getElementById('newprod-unidades').value;

       let json = {};

       return json = {
        "name": nombre,
        "price": precio,
        "units": unidades
       }
    }

    changeProduct(id) {
        event.preventDefault();

        let product = this.almacen.findProduct(id);
        if (product != null) {
            document.getElementById('product_id').value = product.id;
            document.getElementById('product_name').value = product.name;
            document.getElementById('product_price').value = product.price;
            document.getElementById('product_unit').value = product.units;
        }

        document.getElementById('guardarDatos').addEventListener('click', () => this.changeProductInStore(product.id));
    }

    deleteProductFromStore(id) {
        event.preventDefault();
        let product = this.almacen.findProduct(id);
        if (product != null) {

            if (confirm('Desea borrar el producto: ' + product.name)) {

                if (product.units > 0) {
                    if (confirm('El producto ' + product.name + ' tiene ' + product.units + ' unidades ' + ' que van a desaparecer')) {
                        this.almacen.delProduct(id);
                        this.delete(id);
                    }
                } else {
                    this.almacen.delProduct(id);
                    this.delete(id);
                }

                this.view.renderDelProduct(id);

            }

        } else this.view.renderMessage('La id introducida no existe', 'error')

    }

    changeProduckStock(id, idB) {

        event.preventDefault();

        let unidades = 0;

        if (idB == 'stock_up') unidades = 1;
        else if (idB == "stock_down") unidades = -1;


        let x = this.almacen.changeProductUnits(id, unidades);
        if (x != null){
            this.view.renderChangeStock(id, x);
            this.put(x);
        } else this.view.renderMessage('Error al introducir los datos', 'error')



    }

    changeProductInStore(id) {

        event.preventDefault();
        let nombre = document.getElementById('product_name').value;
        let unidades = document.getElementById('product_unit').value;
        let precio = document.getElementById('product_price').value;

        for (let i = 0; i < this.almacen.products.length; i++) {

            if (this.almacen.products[i].id == id) {

                if(nombre != '') this.almacen.products[i].name = nombre;
                if(unidades != ''){
                    let uni = parseInt(unidades)
                    if(uni > 0 ){
                        this.almacen.products[i].units = uni;
                    }
                    
                } 
                if(precio != ''){
                    if(precio > 0){
                        this.almacen.products[i].price = precio;
                    }
                } 

                this.put(this.almacen.products[i]);
                this.view.renderEditProduct(this.almacen.products[i]);
                this.view.renderMessage('Los cambios se han realizado con éxito', 'success')
            }else this.view.renderMessage('Error al introducir los datos', 'error')
        }

    }

    actionButton() {

        event.preventDefault();

        let target = event.target;

        let button = target.closest('button');

        if (button != null) {

            let idP = target.closest('tr').id;

            if (button.id == 'stock_up') this.changeProduckStock(idP, button.id);
            else if (button.id == 'stock_down') this.changeProduckStock(idP, button.id);
            else if (button.id == 'trash') this.deleteProductFromStore(idP);
            else if (button.id == 'change') this.changeProduct(idP);

        }
    }

    get() {
        let productos = [];
        let peticion = new XMLHttpRequest();
        peticion.open('GET', 'http://localhost:3000/productos');
        peticion.send();
        peticion.addEventListener('readystatechange', () => {
            if (peticion.readyState === 4) {
                if (peticion.status === 200) {
                    productos = JSON.parse(peticion.responseText);
                } else {
                    console.log("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
                }
            }

            for (let i = 0; i < productos.length; i++) {
                this.view.renderNewProduct(this.almacen.addProduct2(productos[i]['id'],productos[i]['name'],productos[i]['price'],productos[i]['units']))
            }

           
        });
    }

  post(){
        const peticion=new XMLHttpRequest();
        peticion.open('POST', 'http://localhost:3000/productos');
        peticion.setRequestHeader('Content-type', 'application/json');       
        peticion.send(JSON.stringify(this.addProductToStore()));            
        peticion.addEventListener('load', () => {
            let producto = JSON.parse(peticion.responseText);
            this.view.renderNewProduct(this.almacen.addProduct2(producto['id'],producto['name'],producto['price'],producto['units']))
            this.view.renderMessage('Se ha agregado correctamente el producto', 'success')
        });
       
    }

    delete(id){
        const peticion=new XMLHttpRequest();
        peticion.open('DELETE', `http://localhost:3000/productos/${id}`);
        peticion.setRequestHeader('Content-type', 'application/json');    
        peticion.send();   
        peticion.addEventListener('load', () => {
            console.log('borrado')
            this.view.renderMessage('Se ha eliminado correctamente el producto', 'success')
        });
       
    }

    put(product){

        let json = {
            "name": product.name,
            "price": product.price,
            "units": product.units
        };

    

        const peticion=new XMLHttpRequest();
        peticion.open('PUT', `http://localhost:3000/productos/${product.id}`);
        peticion.setRequestHeader('Content-type', 'application/json');    
        peticion.send(JSON.stringify(json));   
        peticion.addEventListener('load', () => {
           console.log('Actualizado')
           this.view.renderMessage('Se ha actualizado correctamente el producto', 'success')
        });
       
    }

}
