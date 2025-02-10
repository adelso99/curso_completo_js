'use strict'
// BOM: Browser Boject Model
//window: veo la opcion de la ventana
function getBom(){
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);

}

function redirect(url){
    window.location.href = url;
}

function abrirventana(url){
    window.open(url,"","width=400, height=300");
}

getBom();
