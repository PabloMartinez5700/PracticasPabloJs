'use strick'

let ventana = window.open('prueba.html', 'Ventana', 'width=640,height=480,toolbar=yes,menubar=yes,statusbar=yes' );

ventana.moveTo(100, 200)

ventana.document.write('<h1>"Prueba"</h1>')
ventana.menubar.visible(true)
ventana.statusbar.visible(true)
console.log(ventana.location);
ventana.location.visible(true)
ventana.toolbar.visible = true;