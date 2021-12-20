let arrayGrupos = [];
let arrayAlumnos = [];

function getIdAlumnos(array) {
  let idMax = Math.max(...array.map((attribute) => attribute.id), 0);
  return idMax + 1;
}

function geId(array) {
  let idMax = Math.max(...array.map((attribute) => attribute.id), 0);
  return idMax + 1;
}



function addGroup(cod, nombre, grado, familia) {
  if (cod == "" || cod == undefined || nombre == "" || nombre == undefined || grado == "" || grado == undefined || familia == "" || familia == undefined) {
    return false;
  }

  if (grado != "M" && grado != "S") {
    console.error("El grado del grupo solo puede ser M o S");
    return false;
  }

  if (arrayGrupos.some((grupo) => grupo.cod == cod)) return false;

  let newGroup = {
    id: geId(arrayGrupos),
    cod: cod,
    nombre: nombre,
    grado: grado,
    familia: familia,
  };

  console.log(newGroup);

  arrayGrupos.push(newGroup);
  return true;
}

function changeGroup(id, cod, nombre, grado, familia) {
  if (cod == "" || cod == undefined || nombre == "" || nombre == undefined || grado == "" || grado == undefined || familia == "" || familia == undefined) {
    return false;
  }
  if (grado != "M" && grado != "S") {
    console.error("El grado del grupo solo puede ser M o S");
    return false;
  }
  if (!arrayGrupos.some((grupo) => grupo.id == id)) return false;

  let grupoModificado = {
    id: id,
    cod: cod,
    nombre: nombre,
    grado: grado,
    familia: familia,
  };

  let posicionGrupo = arrayGrupos.findIndex((grupo) => grupo.id == id);
  arrayGrupos[posicionGrupo] = grupoModificado;
  return true;
}

function deleteGrup(id) {
  let posicionDelete = arrayGrupos.findIndex((grupo) => grupo.id == id);
  if (posicionDelete == -1) return false;
  else {
    let respuesta = prompt("Quieres eliminar el grupo " + arrayGrupos[posicionDelete].nombre + " (si -> Para confirmar)");
    if (respuesta.toLocaleLowerCase() == "si") {
      arrayGrupos.splice(posicionDelete);
      return true;
    }
  }
  return false;
}

function addPupil(nombre, email, feenac, foto, grupo) {
  if (nombre == "" || nombre == undefined || email == "" || email == undefined) return false;
  if (!arrayGrupos.find((grupoElemento) => grupoElemento.id == grupo)) return false;
  if (!email.includes("@")){
      console.error('No contiene un @')
    return false;
  } 
  let nuevoAlumno = {
    id: getNextIdAlumnos(arrayAlumnos),
    nombre: nombre,
    email: email,
    fecnac: feenac,
    foto: foto,
    grupo: grupo,
  };

  arrayAlumnos.push(nuevoAlumno);
  return true;
}

function changePupil(id, nombre, email, fecnac, foto, grupo) {
  if (nombre == "" || nombre == undefined || email == "" || email == undefined) return false;
  if (!email.includes("@")){
      console.error('No contiene @');
      return false;
  } 
  if (!arrayGrupos.some((grupoP) => grupoP.id == grupo)) return false;
  if (!arrayAlumnos.some((alumno) => alumno.id == id)) return false;

  let alumnoUpdate = {
    id: id,
    nombre: nombre,
    email: email,
    fecnac: fecnac,
    foto: foto,
    grupo: grupo,
  };
  arrayAlumnos[id - 1] = alumnoUpdate;
  return true;
}

function deletePupil(id) {
  let positionDeleteAlumn = arrayAlumnos.findIndex((alumno) => alumno.id == id);
  if (positionDeleteAlumn == -1) return false;
  else {
    let respuesta = prompt("Quieres eliminar el alumno " + arrayAlumnos[positionDeleteAlumn].nombre + 
    ", Grupo: " + arrayAlumnos[positionDeleteAlumn].grupo + " (s, Para confirmar)");
    if (respuesta.toLocaleLowerCase() == "s") {
      arrayAlumnos.splice(positionDeleteAlumn);
      return true;
    }
  }
  return false;
}

console.log(addGroup(2, "2DAM", "S", "Grupo de 2 DAM"));
console.log(addGroup(3, "1DAM", "M", "Grupo 1Dam"));
console.log(arrayGrupos);

addPupil('Pablo', 'pablo@example.com', '05/7/2000', '', 1)
changePupil(2, 'Jesus','jose@example.com', '12/12/1992', '', 1 )// id 2 no existe en ningun alumno
deletePupil(1)

console.log(arrayAlumnos)