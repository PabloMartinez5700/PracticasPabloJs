'use strick'

function mensaje() {
    return alert('Hola');
}

function pop(){
    Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Has tenido un error',
        footer: '<a href="">Why do I have this issue?</a>'
      })
} 
setTimeout(pop, 2000);