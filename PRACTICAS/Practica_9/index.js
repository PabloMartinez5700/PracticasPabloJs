var controll = new controller();

window.addEventListener('load', () =>{

    controll.get();

    document.getElementById("form1").addEventListener('submit', ()=> controll.post());

    document.getElementById("tabla").addEventListener('click', () => controll.actionButton());

});





