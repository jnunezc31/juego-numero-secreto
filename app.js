
let numeroRandom = 0;
let intentos = 0;
let listaNumerosSortados = [];
let numeroMaximo = 10; 

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSortados);
    // si el numero generado esta includio en la lista, se hace de nuevo, si no se agrega. 
    if (listaNumerosSortados.length == numeroMaximo) {
        asignarTextoElemento('p','Todos los números posibles ya fueron sorteados');
    }else{
        if (listaNumerosSortados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSortados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function asignarTextoElemento(element,texto) {
    let elementoHTML = document.querySelector(element);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    if (numeroRandom === numeroDeUsuario) {
     asignarTextoElemento('p',`Acertaste el número  en ${intentos} ${intentos>1 ? 'intentos':'intento'}`);  
     document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if (numeroRandom>numeroDeUsuario) {
            asignarTextoElemento('p','El número es mayor');
        }else{
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
}



function condicionesIniciales() {
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p',`Indique un número del 1 al ${numeroMaximo}`);
    numeroRandom = generarNumeroSecreto();
    console.log(numeroRandom);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar input
    limpiarCaja();
    //mostrar mensaje de ingrese un numero
    //generar un nuevo número aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();    
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();

