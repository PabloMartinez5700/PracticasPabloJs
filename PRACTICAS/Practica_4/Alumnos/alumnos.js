'use strick'

let arrayGrupos = [];
let arrayAlumnos = [];

let tablaPrint = document.getElementById('tablaGrupos');

function addGroup(event) {
  event.preventDefault();
  let cod = document.getElementById("code").value;
  let nombre = document.getElementById("name").value;

  let grado;
  let listGrado = document.getElementsByName('grade');

  let arrayListGrado = Array.from(listGrado);

  for(let inputGrado of arrayListGrado) {
    if(inputGrado.checked) grado = inputGrado.value;
  }
  
  let familia = document.getElementById("family").value;

  if (cod == "" || cod == undefined || nombre == "" || nombre == undefined || grado == "" || grado == undefined || familia == "" || familia == undefined) {
    return false;
  }
  if (grado != "M" && grado != "S") {
    console.error("El grado del grupo solo puede ser M o S");
    return false;
  }

  if (arrayGrupos.some((grupo) => grupo.cod == cod)) return false;

  let newGroup = {
    id: getNextId(arrayGrupos),
    cod: cod,
    nombre: nombre,
    grado: grado,
    familia: familia,
  };

  arrayGrupos.push(newGroup);

  let keys = ['id', 'cod', 'nombre', 'grado', 'familia']
  let tablaTr = document.createElement('tr');
  for(let i = 0; i < 5; i++) {
    let tablaTh = document.createElement('th');
    let contenidoTh = document.createTextNode(newGroup[keys[i]])
    tablaTh.appendChild(contenidoTh);
    tablaTr.appendChild(tablaTh);
  }
  tablaPrint.appendChild(tablaTr);
  resetFormInput();
  return true;
}


function deleteGrup(event) {
  event.preventDefault();

  let id = document.getElementById('deleteInput').value;
  let posicionDelete = arrayGrupos.findIndex((grupo) => grupo.id == id);
  if (posicionDelete == -1) return false;
  else {
    let respuesta = prompt("Quieres eliminar el grupo " + arrayGrupos[posicionDelete].nombre + " (s confirmar)");
    if (respuesta.toLocaleLowerCase() == "s") {
      arrayGrupos.splice(posicionDelete, 1);
      tablaPrint.removeChild(tablaPrint.children[id - 1]);
      document.getElementById('deleteInput').value = '';
      return true;
    }
  }
  return false;
}


window.addEventListener("load", () => {
  document.getElementById("newgroup").addEventListener("submit", addGroup);
  document.getElementById("delgroup").addEventListener("submit", deleteGrup);
});
