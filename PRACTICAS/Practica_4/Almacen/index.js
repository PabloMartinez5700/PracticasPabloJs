import {Controller} from "./controllers/controller.js";

const $i = id => document.querySelector('#' + id).value;
const tbody = document.querySelector('#main');

const controller = new Controller();

tbody.addEventListener('click', function(e) {
    e.preventDefault()
    const target = e.target;

    if(target.classList.contains('btn-add')) {
        let productoNuevo = controller.addProductToStorage();
        //Devuelvo el objeto
        return productoNuevo
    }

    if(target.classList.contains('btn-delete')){
        controller.deleteProductFromStore(parseInt($i('id')));
    }

    if(target.classList.contains('btn-change-units')){
        let id = parseInt($i('idS'));
        let stock = parseInt($i('unitsS'))
        controller.changeProductStock(id, stock);
    }
    
    if(target.classList.contains('btn-d-1')) {
        document.querySelector("#name").value = "";
        document.querySelector("#price").value = "";
        document.querySelector("#units").value = "";
    }
    if(target.classList.contains('btn-d-2')) {
        document.querySelector("#id").value = "";
    }
    if(target.classList.contains('btn-d-3')) {
        document.querySelector("#idS").value = "";
        document.querySelector("#unitsS").value = "";
    }
})