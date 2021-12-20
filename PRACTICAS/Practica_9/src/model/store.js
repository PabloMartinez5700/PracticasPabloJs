class Store{

    constructor(id,array){
        this.id = id
        this.products = array
    }

    findProduct(codigo){

        for(let x = 0; x < this.products.length;x++ ){

            if(this.products[x].id == codigo) return this.products[x];

        }
        
        return null;

    }

    generaIdProduct() {
        if (this.products.length === 0) return 1;
        else {
            let num = this.products[(this.products.length - 1)].id
            return ++num;
        }
    }

    addProduct(nombre,precio,unidades){

      
            let p = new Producto(this.generaIdProduct(),nombre,precio,unidades);
            this.products.push(p)
            return p;
        

    }

    addProduct2(id,nombre,precio,unidades){

      
        let p = new Producto(id,nombre,precio,unidades);
        this.products.push(p)
        return p;
    

}

    delProduct(codigo){

        for(let x = 0; x < this.products.length;x++ ){

            if(this.products[x].id == codigo){

                this.products.splice(x, x + 1);

                return true;
            }

        }

        return false;
    }

    changeProductUnits(codigo,units){

        for(let x = 0; x < this.products.length;x++ ){

            if(this.products[x].id == codigo){
                if(this.products[x].changeUnits(units)) return this.products[x]
                else return null;
            } 

        }

        return false;
    }

    totalImport(){
        let suma = 0;

        for(let x = 0; x < this.products.length;x++ ){

            suma = parseFloat(suma) + parseFloat(this.products[x].productImport())

        }
       
        return suma;
    }
    
    underStock(units){
        let c = []

        for(let x = 0; x < this.products.length;x++ ){

            if(this.products[x].units < units) c.push(this.products[x]);

        }
        
        return c;

    }

    orderByUnits(){
        return this.products.sort((p1,p2) => p2.units - p1.units);
    }

    orderByName(){
        return this.products.sort();
    }


}



