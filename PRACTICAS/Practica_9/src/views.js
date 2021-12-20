class views {

    renderNewProduct(producto) {

        var table = document.getElementById("tabla");

        var rowCount = table.rows.length;

        var row = table.insertRow(rowCount);

        row.setAttribute("id",producto.id);

        var cell1 = row.insertCell(0);

        var element1 = document.createTextNode(producto.id);

        cell1.appendChild(element1);


        var cell1 = row.insertCell(1);

        var element1 = document.createTextNode(producto.name);

        cell1.appendChild(element1);


        var cell1 = row.insertCell(2);

        var element1 = document.createTextNode(producto.units);

        cell1.appendChild(element1);


        var cell1 = row.insertCell(3);

        var element1 = document.createTextNode(producto.price);

        cell1.appendChild(element1);


        var cell1 = row.insertCell(4);

        var element1 = document.createTextNode(producto.productImport() + ' €');

        cell1.appendChild(element1);


        var cell1 = row.insertCell(5);

        var element1 = document.createElement('button');

        element1.classList.add('btn','btn-primary');

        element1.setAttribute("id","stock_up");

        let icon = document.createElement('i');

        icon.classList.add('fas', 'fa-arrow-up')

        element1.append(icon);

        cell1.appendChild(element1);

        //---------------------------------

        var element1 = document.createElement('button');

        element1.classList.add('btn','btn-primary');

        element1.setAttribute("id","stock_down");

        icon = document.createElement('i');

        icon.classList.add('fas', 'fa-arrow-down')

        element1.append(icon);

        cell1.appendChild(element1);

        //---------------------------------

        var element1 = document.createElement('button');

        element1.classList.add('btn','btn-success');

        element1.setAttribute("id","change");
        
        element1.setAttribute('data-bs-toggle', 'modal');

        element1.setAttribute("data-bs-target","#edit-product");

        icon = document.createElement('i');

        icon.classList.add('fas', 'fa-edit')

        element1.append(icon);

        cell1.appendChild(element1);

        //---------------------------------

        var element1 = document.createElement('button');

        element1.classList.add('btn','btn-danger');

        element1.setAttribute("id","trash");

        icon = document.createElement('i');

        icon.classList.add('fas', 'fa-trash')

        element1.append(icon);

        cell1.appendChild(element1);


    }

    renderDelProduct(id) {
        var table = document.getElementById("tabla");

        var rowCount = table.rows.length;

        console.log(rowCount);

        for (var i = 0; i < rowCount; i++) {

            var row = table.rows[i];

            if (row.cells[0].innerHTML == id) {

                table.deleteRow(i);

            }

        }

    }

    renderChangeStock(id, product) {

        var table = document.getElementById("tabla");

        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {

            var row = table.rows[i];

            if (row.cells[0].innerHTML == id) {
                row.cells[2].innerHTML = product.units;
                row.cells[4].innerHTML = product.productImport() + ' €';

            }

        }

    }

    renderEditProduct(product) {

        var table = document.getElementById("tabla");

        var rowCount = table.rows.length;

        console.log(rowCount);

        for (var i = 0; i < rowCount; i++) {

            var row = table.rows[i];

            if (row.cells[0].innerHTML == product.id) {
                row.cells[1].innerHTML = product.name;
                row.cells[2].innerHTML = product.units;
                row.cells[3].innerHTML = product.price;
                row.cells[4].innerHTML = product.productImport() + ' €';

            }

        }
    }

    renderErrorMessage(){
        let id = document.getElementById('messages');

        id.innerHTML = "<span>Aquí pondremos el texto que queramos mostrar</span>";
        id.innerHTML += "<button type=\"button\" class=\"close\" aria-label=\"Close\" onclick=\"this.parentElement.remove()\">";
        id.innerHTML += "<span aria-hidden=\"true\">&times;</span>";
        id.innerHTML += "</button>";
    }

    renderMessage(message, icon = 'info') {
        swal({
            title: message,
            icon: icon,
            button: "Aceptar",
        });

    }

}